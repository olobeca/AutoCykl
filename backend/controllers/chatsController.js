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
        testExistingChat,
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
      include: {
        messages: true,
        pricePropostions: true,
        meetingPropostions: true,
        seller: true,
        buyer: true,
        offer: true,
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

// exports.getChatDataById = async (req, res) => {
//   if (!prisma) {
//     console.error("Get chat data: Prisma client is not initialized");
//     return res
//       .status(500)
//       .json({ message: "Prisma client not initialized on server" });
//   }
//   try {
//     const chatId = parseInt(req.params.chatId);
//     if (!chatId) {
//       return res
//         .status(400)
//         .json({ message: "Missing required field: chatId" });
//     }
//     const chatData = await prisma.chatConversation.findUnique({
//       where: {
//         id: chatId,
//       },
//       include: {
//         messages: true,
//         pricePropostions: true,
//         meetingPropostions: true,
//       },
//     });
//     return res.status(200).json({ chatData });
//   } catch (error) {
//     console.error("Error fetching chat data:", error);
//     res
//       .status(500)
//       .json({ message: "Internal server error", error: error.message });
//   }
// };

exports.newMessage = async (req, res) => {
  if (!prisma) {
    console.error("New message: Prisma client is not initialized");
    return res
      .status(500)
      .json({ message: "Prisma client not initialized on server" });
  }
  try {
    const { chatId, senderId, content } = req.body;

    if (!chatId || !senderId || !content) {
      return res.status(400).json({
        message:
          "Missing required fields: chatId, senderId, and content are required",
      });
    }

    const newMessage = await prisma.message.create({
      data: {
        chatConversationId: parseInt(chatId),
        senderId: parseInt(senderId),
        content: content,
      },
    });
    return res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error creating new message:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.newPrizeProposal = async (req, res) => {
  if (!prisma) {
    console.error("New prize proposal: Prisma client is not initialized");
    return res
      .status(500)
      .json({ message: "Prisma client not initialized on server" });
  }
  try {
    const { chatId, proposerId, proposedPrize } = req.body;

    if (!chatId || !proposerId || !proposedPrize) {
      return res.status(400).json({
        message:
          "Missing required fields: chatId, proposerId, and proposedPrize are required",
      });
    }

    const newProposal = await prisma.pricePropostion.create({
      data: {
        chatConversationId: parseInt(chatId),
        senderId: parseInt(proposerId),
        price: parseFloat(proposedPrize),
      },
    });
    return res.status(201).json(newProposal);
  } catch (error) {
    console.error("Error creating new prize proposal:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.newMeetingProposal = async (req, res) => {
  if (!prisma) {
    console.error("New meeting proposal: Prisma client is not initialized");
    return res
      .status(500)
      .json({ message: "Prisma client not initialized on server" });
  }
  try {
    const { chatId, proposerId, proposedDate, proposedTime, proposedLocation } =
      req.body;

    if (
      !chatId ||
      !proposerId ||
      !proposedDate ||
      !proposedTime ||
      !proposedLocation
    ) {
      return res.status(400).json({
        message:
          "Missing required fields: chatId, proposerId, proposedDate, proposedTime, and proposedLocation are required",
      });
    }

    const newMeetingProposal = await prisma.meetingPropostion.create({
      data: {
        chatConversationId: parseInt(chatId),
        senderId: parseInt(proposerId),
        meetingDate: proposedDate,
        meetingTime: proposedTime,
        location: proposedLocation,
      },
    });
    return res.status(201).json(newMeetingProposal);
  } catch (error) {
    console.error("Error creating new meeting proposal:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
