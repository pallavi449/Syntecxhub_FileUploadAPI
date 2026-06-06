const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api", uploadRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "File Upload API is running 🚀",
  });
});

// Port
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });