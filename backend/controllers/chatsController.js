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
    const newChat = await prisma.chatConversation.create({
      data: {
        sellerId: req.body.sellerId,
        buyerId: req.body.buyerId,
        offerId: req.body.offerId,
      },
    });
    if (!req.body) {
      return res
        .status(422)
        .json({ message: "No data provided", error: "No data" });
    }
  } catch (error) {
    console.error("Error creating new chat:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
