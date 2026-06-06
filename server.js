const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api", uploadRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
      console.log("Server Running on Port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });