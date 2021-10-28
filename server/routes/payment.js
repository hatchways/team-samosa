const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createCustomer } = require("../controllers/payment");

router.route("/create").post(protect, createCustomer);

module.exports = router;
