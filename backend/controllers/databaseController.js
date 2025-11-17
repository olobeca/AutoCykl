const mongoose = require("mongoose");
const user = require("../schemas/user");
const userDBsetup = require("../services/userDBsetup");

exports.setupNewDatabases = async (req, res) => {
  try {
    await userDBsetup.createUserDatabase();
    await userDBsetup.createMessagesDatabase();
    await userDBsetup.createOffersDatabase();
    await userDBsetup.createChatConversationDatabase();
    res.status(201).json({ message: "Databases created successfully!" });
  } catch (error) {
    console.error("Error creating databases:", error);
    res.status(500).json({ message: "Error creating databases" });
  }
};
