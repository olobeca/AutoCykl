const express = require("express");
const router = express.Router();
const chatsController = require("../controllers/chatsController");

router.post("/newChat", chatsController.NewChat);
router.get("/getChatsByUserId/:userId", chatsController.GetChatsByUserId);
// router.get("/getChatDataById/:chatId", chatsController.getChatDataById);
router.post("/newMessage", chatsController.newMessage);
router.post("/newPrizeProposal", chatsController.newPrizeProposal);
router.post("/newMeetingProposal", chatsController.newMeetingProposal);

module.exports = router;
