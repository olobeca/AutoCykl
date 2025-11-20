const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.RegisterUser);
router.get("/user:name", userController.GetUserByName);
router.get("/chats:name", userController.GetUserChats);

module.exports = router;
