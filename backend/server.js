const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { corsOptions } = require("./config/cors");
const dotenv = require("dotenv");
const redis = require("redis");

dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.options("/api/*", cors(corsOptions));
app.use(express.json());

// try {
//   mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((err) => console.error("MongoDB connection error:", err));
// } catch (error) {
//   console.error("Error connecting to MongoDB:", error);
// }

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

const databaseRoutes = require("./routes/databaseRoutes");
app.use("/database", databaseRoutes);

// Start serwera
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});

// //// zabawa z baza danych pg
// const pool = require("./databases/db");

// app.post("/axsxwscscs", async (req, res) => {
//   try {
//     const { name, location } = req.body;
//     await pool.query("INSERT INTO users (name, location) VALUES ($1, $2)", [
//       name,
//       location,
//     ]);
//     res.status(200).send({ message: "Dane zostały dodane do bazy danych" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Błąd serwera");
//   }
// });

// app.get("dataDownload", async (req, res) => {
//   try {
//     const data = await pool.query("SELECT * FROM users");
//     res.status(200).json({ children: data.rows });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Błąd serwera");
//   }
// });

//redis nauka???
(async () => {
  const redisClient = redis.createClient(); //tutaj wpisuje na jakim porcie ma dzialac ew. link do external servera
  redisClient.on("error", (err) => console.log("Redis Client Error", err));
  redisClient.on("connect", () => console.log("Redis client connected"));
  await redisClient.connect();
  await redisClient.ping();
})();
