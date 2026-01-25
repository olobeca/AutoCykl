const { PrismaClient } = require("@prisma/client");
const { error } = require("console");

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
      return res
        .status(422)
        .json({ message: "No data provided", error: "No data" });
    }
    if (await prisma.user.findUnique({ where: { email: req.body.email } })) {
      return res.status(409).json({
        message: `User with email ${req.body.email} already exists`,
        error: "User with this email already exists",
      });
    }
    if (await prisma.user.findUnique({ where: { name: req.body.name } })) {
      return res.status(409).json({
        message: `User with name ${req.body.name} already exists`,
        error: "User with this name already exists",
      });
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

exports.LoginUser = async (req, res) => {
  console.log("try to login user:", req.body);
  if (!prisma) {
    console.error("RegisterUser: Prisma client is not initialized");
    return res
      .status(500)
      .json({ message: "Prisma client not initialized on server" });
  }
  try {
    if (!req.body) {
      return res
        .status(422)
        .json({ message: "No data provided", error: "No data" });
    }
    if (req.body.email === "" || req.body.password === "") {
      return res.status(404).json({
        message: `Email or password cannot be empty`,
        error: "Email or password cannot be empty",
      });
    }
    const user = await prisma.user.findUnique({
      where: { email: req.body.email, passwordHashed: req.body.password },
    });

    if (!user) {
      return res.status(404).json({
        message: `User with email ${req.body.email} not found`,
        error: "Invalid credentials",
      });
    }
    const jwt = require("jsonwebtoken");
    const accessToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_ACCESS_SECRET,
      {
        expiresIn: "1h",
      },
    );
    const refreshToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: "7d",
      },
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false, // HTTPS = true
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: `User ${req.body.email} logged in successfully!`,
      user: user,
      token: accessToken,
    });
  } catch (error) {
    console.error("LoginUser error:", error);
    return res
      .status(500)
      .json({ message: "Error login user", error: error.message });
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

exports.GetUserProfile = async (req, res) => {
  if (!prisma) {
    console.error("GetUserProfile: Prisma client is not initialized");
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
    const userProfile = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        offers: true,
        userRatings: true,
        userPosts: true,
        userPostLikes: true,
        userPostComments: true,
        followers: true,
        following: true,
      },
    });
    if (!userProfile) {
      return res
        .status(404)
        .json({ message: `User with ID ${userId} not found` });
    }
    return res.status(200).json({ userProfile });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
