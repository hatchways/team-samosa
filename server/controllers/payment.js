const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const User = require("../models/User");
const Profile = require("../Models/Profile");
const asyncHandler = require("express-async-handler");

// @route POST /payment
// @desc Create new customer
// @access Private
exports.createCustomer = asyncHandler(async (req, res, next) => {
  const profile = req.profile;

  if (profile.stripeId) {
    res.status(400);
    throw new Error("User already has a stripe Id");
  }

  const customer = await stripe.customers.create();

  profile.stripeId = customer.id;

  await profile.save();

  res.status(200).json({ customer });
});

// @route GET /payment
// @desc Retrieve customer payment details
// @access Private
exports.getCustomer = asyncHandler(async (req, res, next) => {
  const customer = req.customer;

  res.status(200).json({ customer });
});

// @route POST /payment/setup-payment-intent
// @desc Setup a customer payment intent
// @access Private
exports.setupPaymentIntent = asyncHandler(async (req, res, next) => {
  const customer = req.customer;

  const intent = await stripe.setupIntents.create({
    customer: customer.id,
    payment_method_types: ["card"],
  });

  res.status(200).json({ client_secret: intent.client_secret });
});

// @route GET /payment/list-payment-methods
// @desc List payment methods
// @access Private
exports.listPaymentMethods = asyncHandler(async (req, res, next) => {
  const customer = req.customer;

  const paymentMethods = await stripe.paymentMethods.list({
    customer: customer.id,
    type: "card",
  });

  res.status(200).json({ paymentMethods });
});

// @route POST /payment/create-payment-intent
// @desc Create payment intent
// @access Private
exports.createPaymentIntent = asyncHandler(async (req, res, next) => {
  const { amount, currency, paymentMethod } = req.body;

  if (!amount || !currency || !paymentMethod) {
    res.status(400);
    throw new Error("Request body has an empty field");
  }

  const customer = req.customer;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency,
    customer: customer.id,
    payment_method: paymentMethod,
    off_session: true,
    confirm: true,
  });

  res.status(200).json({ paymentIntent });
});

//POST /payment/create-payment-method is included for testing purposes
//route should not be used in production

// @route POST /payment/create-payment-method
// @desc Create fake payment method for testing
// @access Private
exports.createPaymentMethod = asyncHandler(async (req, res, next) => {
  const customer = req.customer;

  const paymentMethod = await stripe.paymentMethods.create({
    type: "card",
    card: {
      number: "4242424242424242",
      exp_month: 10,
      exp_year: 2022,
      cvc: "314",
    },
  });

  const paymentAttach = await stripe.paymentMethods.attach(paymentMethod.id, {
    customer: customer.id,
  });
  res.status(200).json({ paymentAttach });
});
