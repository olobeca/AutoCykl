const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { corsOptions } = require("./config/cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.options("/api/*", cors(corsOptions));
app.use(express.json());

try {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Start serwera
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});

//// zabawa z baza danych pg
const pool = require("./databases/db");

app.post("/", async (req, res) => {
  try {
    const { name, location } = req.body;
    await pool.query("INSERT INTO users (name, location) VALUES ($1, $2)", [
      name,
      location,
    ]);
    res.status(200).send({ message: "Dane zostały dodane do bazy danych" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Błąd serwera");
  }
});

app.get("/setup", async (req, res) => {
  try {
    await pool.query(
      "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(100), location VARCHAR(100))"
    );
    res.status(200).send("Tabela users została utworzona lub już istnieje.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Błąd serwera");
  }
});

app.get("dataDownload", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM users");
    res.status(200).json({ children: data.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Błąd serwera");
  }
});
