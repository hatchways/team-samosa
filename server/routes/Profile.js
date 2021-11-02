const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getProfiles,
  getProfile,
  getPublicProfile,
  createProfile,
  updateProfile,
} = require("../controllers/profile");

router.route("/").get(protect, getProfile);

router.route("/all").get(getProfiles);

router.route("/all").get(getProfiles);

router.route("/public/:id").get(getPublicProfile);

router.route("/").post(protect, createProfile);

router.route("/").patch(protect, updateProfile);

module.exports = router;
