const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.post("/register", userController.RegisterUser);
router.post("/login", userController.LoginUser);
router.post("/refresh", authController.RefreshToken);
router.get("/profile/:userId", userController.GetUserProfile);
// router.get("/user:name", userController.GetUserByName);
// router.get("/chats:name", userController.GetUserChats);

module.exports = router;
