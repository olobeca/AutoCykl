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
