const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.NewChat = async (req, res) => {
  console.log("Received new chat request:", req.body);

  if (!prisma) {
    console.error("Offer creating: Prisma client is not initialized");
    return res
      .status(500)
      .json({ message: "Prisma client not initialized on server" });
  }

  try {
    const { sellerId, buyerId, offerId } = req.body;

    if (!sellerId || !buyerId || !offerId) {
      return res.status(400).json({
        message:
          "Missing required fields: sellerId, buyerId, and offerId are required",
      });
    }

    const newChat = await prisma.chatConversation.create({
      data: {
        sellerId: parseInt(sellerId),
        buyerId: parseInt(buyerId),
        offerId: parseInt(offerId),
      },
    });
    return res.status(201).json(newChat);
  } catch (error) {
    console.error("Error creating new chat:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
