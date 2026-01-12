const express = require("express");
const router = express.Router();
const offersController = require("../controllers/offersController");

router.post("/create", offersController.CreateOffer);
router.get("/getAll", offersController.GetAllOffers);
router.get("/getOfferById/:id", offersController.GetOfferById);
router.get(
  "/getLikedOffersByUser/:userId",
  offersController.GetLikedOffersByUser
);
router.get("/getTopOffers", offersController.GetTopOffers);
router.get("/getSamochodyOsobowew", offersController.GetSamochodyOsobowe);
router.get("/getSamochodyDostawcze", offersController.GetSamochodyDostawcze);
router.get("/getMotocykle", offersController.GetMotocykle);
router.get("/getMaszynyRolnicze", offersController.GetMaszynyRolnicze);
router.get(
  "/isOfferLiked/:offerId/:userId",
  offersController.isOfferLikedByUser
);
module.exports = router;

router.get("getOffersByParams", offersController.GetOffersByParams);
