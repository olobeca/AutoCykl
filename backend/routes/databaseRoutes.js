const express = require("express");
const router = express.Router();
const databaseController = require("../controllers/databaseController");

router.post("/setup", databaseController.setupNewDatabases);

module.exports = router;
