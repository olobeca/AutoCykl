const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { corsOptions } = require("./config/cors");
const dotenv = require("dotenv");
const redis = require("redis");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// try {
//   mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((err) => console.error("MongoDB connection error:", err));
// } catch (error) {
//   console.error("Error connecting to MongoDB:", error);
// }

const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);

const databaseRoutes = require("./routes/databaseRoutes");
app.use("/database", databaseRoutes);

// Start serwera
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});

//redis nauka???
// (async () => {
//   const redisClient = redis.createClient(); //tutaj wpisuje na jakim porcie ma dzialac ew. link do external servera
//   redisClient.on("error", (err) => console.log("Redis Client Error", err));
//   redisClient.on("connect", () => console.log("Redis client connected"));
//   await redisClient.connect();
//   await redisClient.ping();
// })();

require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

(async () => {
  const prisma = new PrismaClient();
  try {
    await prisma.$connect();
    console.log(
      "Prisma connected, DATABASE_URL present:",
      !!process.env.DATABASE_URL
    );
    await prisma.$disconnect();
  } catch (e) {
    console.error("Prisma connect error:", e);
    process.exit(1);
  }
})();
