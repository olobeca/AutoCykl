const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.NewChat = async (req, res) => {
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
    const testExistingChat = await prisma.chatConversation.findFirst({
      where: {
        sellerId: parseInt(sellerId),
        buyerId: parseInt(buyerId),
        offerId: parseInt(offerId),
      },
    });
    if (testExistingChat) {
      console.log(
        "Chat already exists between these users for this offer:",
        testExistingChat
      );
      return res.status(200).json(testExistingChat);
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

exports.GetChatsByUserId = async (req, res) => {
  if (!prisma) {
    console.error("Get chats: Prisma client is not initialized");
    return res
      .status(500)
      .json({ message: "Prisma client not initialized on server" });
  }
  try {
    const userId = parseInt(req.params.userId);

    if (!userId) {
      return res
        .status(400)
        .json({ message: "Missing required field: userId" });
    }

    const chats = await prisma.chatConversation.findMany({
      where: {
        OR: [{ sellerId: userId }, { buyerId: userId }],
      },
    });
    return res.status(200).json({ chats });
  } catch (error) {
    console.error("Error fetching chats:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
