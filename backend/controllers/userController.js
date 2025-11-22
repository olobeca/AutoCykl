const { PrismaClient } = require("@prisma/client");

console.log("DATABASE_URL set:", !!process.env.DATABASE_URL);

const prisma = new PrismaClient();

exports.RegisterUser = async (req, res) => {
  console.log("try to register user:", req.body);
  if (!prisma) {
    console.error("RegisterUser: Prisma client is not initialized");
    return res
      .status(500)
      .json({ message: "Prisma client not initialized on server" });
  }
  try {
    if (!req.body) {
      return res.status(422).json({ message: "No data provided" });
    }
    if (await prisma.user.findUnique({ where: { email: req.body.email } })) {
      return res
        .status(409)
        .json({ message: `User with email ${req.body.email} already exists` });
    }
    if (await prisma.user.findUnique({ where: { name: req.body.name } })) {
      return res
        .status(409)
        .json({ message: `User with name ${req.body.name} already exists` });
    }
    const newUser = await prisma.user.create({
      data: {
        email: req.body.email,
        passwordHashed: req.body.password,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
      },
    });
    return res.status(201).json({
      message: `User ${req.body.name} created successfully!`,
      userId: newUser.id,
    });
  } catch (error) {
    console.error("RegisterUser error:", error);
    return res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

// exports.GetUserByName = async (req, res) => {
//   try {
//     const user = await prisma.user.findUnique({
//       where: { name: req.params.name }, //params bo jest w urlu
//     });
//     if (!user) {
//       return res
//         .status(404)
//         .json({ message: `User with name ${req.params.name} not found` });
//     }
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };

// exports.GetUserChats = async (req, res) => {
//   try {
//     const chats = await prisma.chatConversation.findUnique({
//       where: { name: req.params.name },
//     });

//     if (!chats) {
//       return res
//         .status(404)
//         .json({ message: `No chats found for user ${req.params.name}` });
//     }
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };
