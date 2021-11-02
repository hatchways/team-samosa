const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const verifyProfile = require("../middleware/verifyProfile");
const verifyStripeCustomer = require("../middleware/verifyStripeCustomer");
const {
  getCustomer,
  createCustomer,
  setupPaymentIntent,
  createPaymentIntent,
  listPaymentMethods,
  createPaymentMethod,
} = require("../controllers/payment");

router
  .route("/")
  .get(protect, verifyProfile, verifyStripeCustomer, getCustomer);

router.route("/").post(protect, verifyProfile, createCustomer);

router
  .route("/setup-payment-intent")
  .post(protect, verifyProfile, verifyStripeCustomer, setupPaymentIntent);

router
  .route("/create-payment-intent")
  .post(protect, verifyProfile, verifyStripeCustomer, createPaymentIntent);

router
  .route("/list-payment-methods")
  .get(protect, verifyProfile, verifyStripeCustomer, listPaymentMethods);

//POST /payment/create-payment-method is included for testing purposes
//route should not be used in production
router
  .route("/create-payment-method")
  .post(protect, verifyProfile, verifyStripeCustomer, createPaymentMethod);

module.exports = router;
