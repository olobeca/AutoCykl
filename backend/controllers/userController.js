const mongoose = require("mongoose");
const user = require("../schemas/user");
const userService = require("../services/userService");

exports.RegisterUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    await userService.createUser(email, password);
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Error creating user" });
  }
};
