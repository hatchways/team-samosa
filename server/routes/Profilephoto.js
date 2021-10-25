const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
import multer from 'multer';
const {
  getPhoto,
  uploadPhoto,
} = require("../controllers/Profilephpto");


router.route("/").get(protect, getPhoto);

router.route("/").post(protect, multer({ dest: 'temp/', limits: { fieldSize: 8 * 1024 * 1024 } }).single(
  'avatar'
), uploadPhoto);


module.exports = router;
