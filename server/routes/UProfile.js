const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getUProfile,
} = require("../controllers/Profile");


router.route("/").get(protect, getUProfile);

module.exports = router;
