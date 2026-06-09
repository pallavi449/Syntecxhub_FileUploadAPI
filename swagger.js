const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "File Upload API",
      version: "1.0.0",
      description: "API for uploading and managing files",
    },
    servers: [
      {
        url: "https://fileuploadapi-7der.onrender.com",
      },
    ],
  },
  apis: ["./server.js"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;