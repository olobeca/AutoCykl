const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
exports.RegisterUser = async (req, res) => {
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
    res
      .status(201)
      .json({ message: `User ${req.body.name} created successfully!` });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Error creating user" });
  }
};
