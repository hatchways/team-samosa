const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getProfiles,
  getProfile,
  createProfile,
  updateProfile,
} = require("../controllers/profile");

router.route("/").get(getProfiles);

router.route("/:id").get(getProfile);

router.route("/").post(protect, createProfile);

router.route("/").patch(protect, updateProfile);

module.exports = router;
