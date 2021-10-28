const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { getCustomer, createCustomer } = require("../controllers/payment");

router.route("/").get(protect, getCustomer);

router.route("/create").post(protect, createCustomer);

module.exports = router;
