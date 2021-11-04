const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const multer = require("multer");

const {
  uploadPhoto,
  downloadPhoto
} = require("../controllers/Profilephoto");


router.route("/").post(protect, multer({ dest: '/', limits: { fieldSize: 8 * 1024 * 1024 } }).single(
  'picture'
), uploadPhoto);

router.route("/").get(protect, downloadPhoto);


module.exports = router;
