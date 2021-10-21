const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getProfile,
  createProfile,
  updateProfile,
} = require("../controllers/Profile");

router.route("/").get(protect, getProfile);

router.route("/").post(protect, createProfile);

router.route("/").patch(protect, updateProfile);

module.exports = router;
