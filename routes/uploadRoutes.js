const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const {
  uploadFile,
  getFiles,
  deleteFile,
} = require("../controllers/uploadController");

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload an image file
 *     tags:
 *       - File Upload
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: File uploaded successfully
 */
router.post(
  "/upload",
  upload.single("image"),
  uploadFile
);

/**
 * @swagger
 * /api/files:
 *   get:
 *     summary: Get all uploaded files
 *     tags:
 *       - File Upload
 *     responses:
 *       200:
 *         description: Returns all uploaded files
 */
router.get(
  "/files",
  getFiles
);

/**
 * @swagger
 * /api/files/{id}:
 *   delete:
 *     summary: Delete a file
 *     tags:
 *       - File Upload
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: File deleted successfully
 */
router.delete(
  "/files/:id",
  deleteFile
);

module.exports = router;