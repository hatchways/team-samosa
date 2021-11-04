const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const multer = require("multer");

const {
  createMessage
} = require("../controllers/message");



router.route("/").post(protect, createMessage);


module.exports = router;
