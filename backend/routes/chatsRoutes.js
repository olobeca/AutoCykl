const express = require("express");
const router = express.Router();
const chatsController = require("../controllers/chatsController");

router.post("/newChat", chatsController.NewChat);
router.get("/getChatsByUserId/:userId", chatsController.GetChatsByUserId);

module.exports = router;
