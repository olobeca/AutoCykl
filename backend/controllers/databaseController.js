const mongoose = require("mongoose");
const user = require("../schemas/user");
const userDBsetupBySQL = require("../services/userDBsetupBySQL");

exports.setupNewDatabases = async (req, res) => {
  try {
    // await userDBsetupBySQL.createUserDatabase();
    // await userDBsetupBySQL.createMessagesDatabase();
    // await userDBsetupBySQL.createOffersDatabase();
    // await userDBsetupBySQL.createChatConversationDatabase();
    res.status(201).json({ message: "Databases created successfully!" });
  } catch (error) {
    console.error("Error creating databases:", error);
    res.status(500).json({ message: "Error creating databases" });
  }
};
