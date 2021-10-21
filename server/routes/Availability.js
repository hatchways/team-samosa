const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getAvailability,
  createAvailability,
  updateAvailability,
} = require("../controllers/Availability");

router.route("/").get(protect, getAvailability);

router.route("/").post(protect, createAvailability);

router.route("/:id").patch(protect, updateAvailability);

module.exports = router;
