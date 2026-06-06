const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const {
  uploadFile,
  getFiles,
  deleteFile,
} = require("../controllers/uploadController");

router.post(
  "/upload",
  upload.single("image"),
  uploadFile
);

router.get(
  "/files",
  getFiles
);

router.delete(
  "/files/:id",
  deleteFile
);

module.exports = router;