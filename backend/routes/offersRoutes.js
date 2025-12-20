const express = require("express");
const router = express.Router();
const offersController = require("../controllers/offersController");

router.post("/create", offersController.CreateOffer);

module.exports = router;
