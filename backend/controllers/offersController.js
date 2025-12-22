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
    if (
      !req.body.ownerName ||
      !req.body.brand ||
      !req.body.model ||
      !req.body.version ||
      !req.body.Cartype ||
      !req.body.year ||
      !req.body.mileage ||
      !req.body.location ||
      !req.body.price ||
      !req.body.fuelType ||
      !req.body.engineCapacity ||
      !req.body.power ||
      !req.body.color ||
      !req.body.doors ||
      !req.body.interiorColor ||
      !req.body.torque ||
      !req.body.bodyType ||
      !req.body.seats ||
      !req.body.vin ||
      !req.body.transmission ||
      !req.body.description ||
      !req.body.equipment ||
      !req.body.warranty ||
      !req.body.offerType
    ) {
      return res
        .status(422)
        .json({ message: "Missing required fields", error: "Incomplete data" });
    }
    const newOffer = await prisma.offer.create({
      data: {
        ownerName: req.body.ownerName,
        brand: req.body.brand,
        model: req.body.model,
        version: req.body.version,
        Cartype: req.body.CarType,
        year: req.body.year,
        mileage: req.body.mileage,
        location: req.body.location,
        price: req.body.price,
        fuelType: req.body.fuelType,
        engineCapacity: req.body.engineCapacity,
        power: req.body.power,
        color: req.body.color,
        doors: req.body.doors,
        interiorColor: req.body.interiorColor,
        torque: req.body.torque,
        bodyType: req.body.bodyType,
        seats: req.body.seats,
        vin: req.body.vin,
        transmission: req.body.transmission,
        description: req.body.description,
        equipment: req.body.equipment,
        warranty: req.body.warranty,
        isNoAccident: req.body.isNoAccident,
        offerType: req.body.offerType,
      },
    });
    return res.status(201).json({
      message: `Car ${req.body.brand} ${req.body.model} created successfully!`,
      carId: newOffer.id,
    });
  } catch (error) {
    console.error("CreateOffer error:", error);
    return res
      .status(500)
      .json({ message: "Error creating offer", error: error.message });
  }
};
