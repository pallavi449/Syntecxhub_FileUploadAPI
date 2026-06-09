const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

require("dotenv").config();

const uploadRoutes = require("./routes/uploadRoutes");
const swaggerSpec = require("./swagger");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

// Swagger Documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

// API Routes
app.use("/api", uploadRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>File Upload API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 900px;
          margin: 40px auto;
          padding: 20px;
          line-height: 1.6;
          background-color: #f9fafb;
        }

        h1 {
          color: #2563eb;
        }

        .card {
          background: white;
          padding: 20px;
          margin-top: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        code {
          background: #e5e7eb;
          padding: 2px 6px;
          border-radius: 4px;
        }

        a {
          color: #2563eb;
          text-decoration: none;
          font-weight: bold;
        }

        a:hover {
          text-decoration: underline;
        }

        ul {
          padding-left: 20px;
        }
      </style>
    </head>

    <body>

      <h1>🚀 File Upload API</h1>

      <p>
        A RESTful backend API built using Node.js, Express.js,
        MongoDB and Multer for secure file upload and management.
      </p>

      <div class="card">
        <h2>📌 Features</h2>
        <ul>
          <li>File Upload</li>
          <li>File Management</li>
          <li>MongoDB Integration</li>
          <li>REST API Architecture</li>
          <li>Cloud Deployment on Render</li>
        </ul>
      </div>

      <div class="card">
        <h2>🔗 API Endpoints</h2>

        <p>
          <code>POST /api/upload</code><br>
          Upload a file
        </p>

        <p>
          <code>GET /uploads/:filename</code><br>
          Access uploaded files
        </p>
      </div>

      <div class="card">
        <h2>📚 API Documentation</h2>

        <p>
          Test and explore endpoints using Swagger UI.
        </p>

        <a href="/api-docs" target="_blank">
          Open Swagger Documentation →
        </a>
      </div>

      <div class="card">
        <h2>🛠 Tech Stack</h2>

        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Multer</li>
          <li>Swagger</li>
          <li>Render</li>
        </ul>
      </div>

      <p>
        <strong>Status:</strong> ✅ Running Successfully
      </p>

    </body>
    </html>
  `);
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