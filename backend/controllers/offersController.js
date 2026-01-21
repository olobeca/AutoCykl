const { PrismaClient } = require("@prisma/client");
const { esClient } = require("../config/elastic");

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
      !req.body.ownerId ||
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
        ownerId: req.body.ownerId,
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
    try {
      await esClient.index({
        index: "offers",
        id: newOffer.id,
        document: {
          brand: newOffer.brand,
          model: newOffer.model,
          price: newOffer.price,
          year: newOffer.year,
          mileage: newOffer.mileage,
          fuelType: newOffer.fuelType,
          description: newOffer.description,
          location: newOffer.location,
          createdAt: newOffer.createdAt,
        },
      });
    } catch (esError) {
      console.error("Error indexing new offer to ElasticSearch:", esError);
    }

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

exports.GetAllOffers = async (req, res) => {
  console.log("Try to get all offers");
  try {
    const allOffers = await prisma.offer.findMany();
    return res.status(200).json({ offers: allOffers });
  } catch (error) {
    console.error("GetAllOffers error:", error);
    return res
      .status(500)
      .json({ message: "Error retrieving offers", error: error.message });
  }
};

exports.GetOfferById = async (req, res) => {
  console.log("Try to get offer by ID:", req.params.id);
  try {
    const offer = await prisma.offer.findUnique({
      where: { id: parseInt(req.params.id) },
      include: { views: true, likedBy: true, chatConversations: true },
    });
    if (!offer) {
      return res.status(404).json({ message: "Offer not found" });
    }
    return res.status(200).json({ offer });
  } catch (error) {
    console.error("GetOfferById error:", error);
    return res
      .status(500)
      .json({ message: "Error retrieving offer", error: error.message });
  }
};

exports.GetLikedOffersByUser = async (req, res) => {
  console.log("Try to get liked offers for user ID:", req.params.userId);
  try {
    const likedOffers = await prisma.like.findMany({
      where: { userId: parseInt(req.params.userId) },
      include: { offer: true },
    });
    return res.status(200).json({ likedOffers });
  } catch (error) {
    console.error("GetLikedOffersByUser error:", error);
    return res
      .status(500)
      .json({ message: "Error retrieving liked offers", error: error.message });
  }
};

exports.GetTopOffers = async (req, res) => {
  console.log("Try to get top offers");
  try {
    const topOffers = await prisma.offer.findMany({
      where: { offerType: "top" },
    });
    return res.status(200).json({ topOffers });
  } catch (error) {
    console.error("GetTopOffers error:", error);
    return res
      .status(500)
      .json({ message: "Error retrieving top offers", error: error.message });
  }
};

exports.GetSamochodyOsobowe = async (req, res) => {
  console.log("Try to get Samochody Osobowe offers");
  try {
    const osoboweOffers = await prisma.offer.findMany({
      where: { Cartype: "Samochody osobowe" },
    });
    return res.status(200).json({ osoboweOffers });
  } catch (error) {
    console.error("GetSamochodyOsobowe error:", error);
    return res.status(500).json({
      message: "Error retrieving Samochody Osobowe offers",
      error: error.message,
    });
  }
};

exports.GetSamochodyDostawcze = async (req, res) => {
  console.log("Try to get Samochody Osobowe offers");
  try {
    const osoboweOffers = await prisma.offer.findMany({
      where: { Cartype: "Samochody dostawcze" },
    });
    return res.status(200).json({ dostawczeOffers });
  } catch (error) {
    console.error("GetSamochodyDostawcze error:", error);
    return res.status(500).json({
      message: "Error retrieving Samochody Dostawcze offers",
      error: error.message,
    });
  }
};

exports.GetMotocykle = async (req, res) => {
  console.log("Try to get Motocykle offers");
  try {
    const motocyklOffers = await prisma.offer.findMany({
      where: { Cartype: "Motocykle" },
    });
    return res.status(200).json({ motocyklOffers });
  } catch (error) {
    console.error("GetMotocykle error:", error);
    return res.status(500).json({
      message: "Error retrieving Motocykle offers",
      error: error.message,
    });
  }
};

exports.GetMaszynyRolnicze = async (req, res) => {
  console.log("Try to get Maszyny Rolnicze offers");
  try {
    const maszynyRolniczeOffers = await prisma.offer.findMany({
      where: { Cartype: "Maszyny rolnicze" },
    });
    return res.status(200).json({ maszynyRolniczeOffers });
  } catch (error) {
    console.error("GetMaszynyRolnicze error:", error);
    return res.status(500).json({
      message: "Error retrieving Maszyny Rolnicze offers",
      error: error.message,
    });
  }
};

exports.isOfferLikedByUser = async (offerId, userId) => {
  try {
    const like = await prisma.like.findUnique({
      where: {
        userId: req.params.userId,
        offerId: req.params.offerId,
      },
    });
    if (like) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("isOfferLikedByUser error:", error);
    throw new Error("Error checking if offer is liked by user");
  }
};

exports.GetOffersByFilters = async (req, res) => {
  console.log("Try to get offers by filters:", req.body);
  try {
    const {
      brand,
      model,
      minPrice,
      maxPrice,
      yearFrom,
      yearTo,
      mileageFrom,
      mileageTo,
      fuelTypes,
      bodyTypes,
      colors,
      features,
      location,
    } = req.body || {};

    const filters = [];
    if (brand) filters.push({ match: { brand } });
    if (model) filters.push({ match: { model } });
    if (location) filters.push({ term: { location } });

    if (fuelTypes && fuelTypes.length)
      filters.push({ terms: { fuelType: fuelTypes } });
    if (bodyTypes && bodyTypes.length)
      filters.push({ terms: { bodyType: bodyTypes } });
    if (colors && colors.length) filters.push({ terms: { color: colors } });

    if (minPrice || maxPrice) {
      const range = {};
      if (minPrice !== undefined && minPrice !== null && minPrice !== "")
        range.gte = Number(minPrice);
      if (maxPrice !== undefined && maxPrice !== null && maxPrice !== "")
        range.lte = Number(maxPrice);
      filters.push({ range: { price: range } });
    }

    if (yearFrom || yearTo) {
      const range = {};
      if (yearFrom !== undefined && yearFrom !== null && yearFrom !== "")
        range.gte = Number(yearFrom);
      if (yearTo !== undefined && yearTo !== null && yearTo !== "")
        range.lte = Number(yearTo);
      filters.push({ range: { year: range } });
    }

    if (mileageFrom || mileageTo) {
      const range = {};
      if (
        mileageFrom !== undefined &&
        mileageFrom !== null &&
        mileageFrom !== ""
      )
        range.gte = Number(mileageFrom);
      if (mileageTo !== undefined && mileageTo !== null && mileageTo !== "")
        range.lte = Number(mileageTo);
      filters.push({ range: { mileage: range } });
    }

    // features / equipment matching
    if (features && features.length) {
      features.forEach((f) => {
        filters.push({ match: { equipment: f } });
      });
    }

    const result = await esClient.search({
      index: "offers",
      size: 100,
      query: {
        bool: {
          filter: filters,
        },
      },
    });

    return res.status(200).json({ offers: result.hits.hits });
  } catch (error) {
    console.error("GetOffersByFilters error:", error);
    return res
      .status(500)
      .json({ message: "Error retrieving offers", error: error.message });
  }
};

exports.GetOffersByParams = async (req, res) => {
  console.log("Try to get offers by parameters:", req.query);
  const {
    brand,
    model,
    minPrice,
    maxPrice,
    priceFrom,
    priceTo,
    year,
    yearFrom,
    fuelType,
    location,
  } = req.query;

  const gtePrice = minPrice || priceFrom;
  const ltePrice = maxPrice || priceTo;
  const gteYear = year || yearFrom;
  try {
    const filters = [];
    if (brand) filters.push({ term: { brand } });
    if (model) filters.push({ match: { model } });
    if (fuelType) filters.push({ term: { fuelType } });
    if (location) filters.push({ term: { location } });
    if (ltePrice) filters.push({ range: { price: { lte: Number(ltePrice) } } });
    if (gtePrice) filters.push({ range: { price: { gte: Number(gtePrice) } } });
    if (gteYear) filters.push({ range: { year: { gte: Number(gteYear) } } });

    const result = await esClient.search({
      index: "offers",
      query: {
        bool: {
          filter: filters,
        },
      },
    });
    return res.status(200).json({ offers: result.hits.hits });
  } catch (error) {
    console.error("GetOffersByParams error:", error);
    return res
      .status(500)
      .json({ message: "Error retrieving offers", error: error.message });
  }
};

exports.LikeOffer = async (req, res) => {
  console.log("Try to like offer:", req.body);
  try {
    const { userId, offerId } = req.body;
    if (!userId || !offerId) {
      return res
        .status(422)
        .json({ message: "Missing userId or offerId in request body" });
    }
    const newLike = await prisma.like.create({
      data: {
        userId: userId,
        offerId: offerId,
      },
    });
    return res.status(201).json({ message: "Offer liked", like: newLike });
  } catch (error) {
    console.error("LikeOffer error:", error);
    return res
      .status(500)
      .json({ message: "Error liking offer", error: error.message });
  }
};

exports.UnlikeOffer = async (req, res) => {
  console.log("Try to unlike offer:", req.body);
  try {
    const { userId, offerId } = req.body;
    if (!userId || !offerId) {
      return res
        .status(422)
        .json({ message: "Missing userId or offerId in request body" });
    }
    const deletedLike = await prisma.like.delete({
      where: {
        userId: userId,
        offerId: offerId,
      },
    });
    return res
      .status(200)
      .json({ message: "Offer unliked", like: deletedLike });
  } catch (error) {
    console.error("UnlikeOffer error:", error);
    return res
      .status(500)
      .json({ message: "Error unliking offer", error: error.message });
  }
};

exports.AddViewToOffer = async (req, res) => {
  console.log("Try to add view to offer ID:", req.params.offerId);
  try {
    const offerId = parseInt(req.params.offerId);
    const updatedOffer = await prisma.view.create({
      data: {
        offerId: offerId,
      },
    });
    return res
      .status(200)
      .json({ message: "View added to offer", offer: updatedOffer });
  } catch (error) {
    console.error("AddViewToOffer error:", error);
    return res
      .status(500)
      .json({ message: "Error adding view to offer", error: error.message });
  }
};

exports.GetAllUserOffers = async (req, res) => {
  console.log("Try to get all offers for user ID:", req.params.userId);
  try {
    const userId = parseInt(req.params.userId);
    const userOffers = await prisma.offer.findMany({
      where: { ownerId: userId },
      include: { views: true, likedBy: true, chatConversations: true },
    });
    return res.status(200).json({ offers: userOffers });
  } catch (error) {
    console.error("GetAllUserOffers error:", error);
    return res.status(500).json({
      message: "Error retrieving user's offers",
      error: error.message,
    });
  }
};

exports.GetSimilarOffers = async (req, res) => {
  console.log("Try to get similar offers for car type:", req.params.carType);
  try {
    const carType = req.params.carType;
    const similarOffers = await prisma.offer.findMany({
      where: { Cartype: carType },
      take: 3,
    });
    return res.status(200).json({ offers: similarOffers });
  } catch (error) {
    console.error("GetSimilarOffers error:", error);
    return res.status(500).json({
      message: "Error retrieving similar offers",
      error: error.message,
    });
  }
};
