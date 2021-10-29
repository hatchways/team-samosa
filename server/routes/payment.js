const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getCustomer,
  createCustomer,
  setupPaymentIntent,
  createPaymentIntent,
  listPaymentMethods,
  createPaymentMethod,
} = require("../controllers/payment");

router.route("/").get(protect, getCustomer);

router.route("/").post(protect, createCustomer);

router.route("/setup-payment-intent").post(protect, setupPaymentIntent);

router.route("/create-payment-intent").post(protect, createPaymentIntent);

router.route("/list-payment-methods").get(protect, listPaymentMethods);

//POST /payment/create-payment-method is included for testing purposes
//route should not be used in production
router.route("/create-payment-method").post(protect, createPaymentMethod);

module.exports = router;
