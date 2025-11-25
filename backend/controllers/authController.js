import express from "express";
import dotenv from "dotenv";

dotenv.config();

exports.RefreshToken = async (req, res) => {
  const jwt = require("jsonwebtoken");
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token provided" });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const newAccessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      accessToken: newAccessToken,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error refreshing token", error: error.message });
  }
};
