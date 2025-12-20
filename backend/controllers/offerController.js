const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.CreateOffer = async (req, res) => {
  console.log("try to create offer:", req.body);
  if (!prisma) {
    console.error("Offer creating: Prisma client is not initialized");
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
    const newOffer = await prisma.offer.create({
      data: {},
    });
    // return res.status(201).json({
    //   message: `User ${req.body.name} created successfully!`,
    //   userId: newUser.id,
    // });
  } catch (error) {
    console.error("CreateOffer error:", error);
    return res
      .status(500)
      .json({ message: "Error creating offer", error: error.message });
  }
};
