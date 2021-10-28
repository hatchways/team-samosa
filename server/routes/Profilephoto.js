const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const multer = require("multer");

const {
  uploadPhoto,
} = require("../controllers/Profilephoto");


router.route("/").post(protect, multer({ dest: 'temp/', limits: { fieldSize: 8 * 1024 * 1024 } }).single(
  'avatar'
), uploadPhoto);


module.exports = router;
