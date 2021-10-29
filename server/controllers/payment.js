const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const User = require("../models/User");
const Profile = require("../Models/Profile");
const asyncHandler = require("express-async-handler");

// @route POST /payment
// @desc Create new customer
// @access Private
exports.createCustomer = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const profile = await Profile.findOne({ userId });

  if (!profile) {
    res.status(400);
    throw new Error("User does not have a profile");
  }

  if (profile.stripeId) {
    res.status(400);
    throw new Error("User is already a customer");
  }

  const customer = await stripe.customers.create();

  if (!customer) {
    res.status(503);
    throw new Error("Couldn't create customer");
  }

  profile.stripeId = customer.id;

  await profile.save();

  res.status(200).json({ customer });
});

// @route GET /payment
// @desc Retrieve customer payment details
// @access Private
exports.getCustomer = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const profile = await Profile.findOne({ userId });

  if (!profile) {
    res.status(400);
    throw new Error("User does not have a profile");
  }

  if (!profile.stripeId) {
    res.status(400);
    throw new Error("User does not have a stripe Id");
  }

  const customer = await stripe.customers.retrieve(profile.stripeId);

  if (!customer) {
    res.status(500);
    throw new Error("Couldn't retrieve customer");
  }

  res.status(200).json({ customer });
});

// @route POST /payment/setup-payment-intent
// @desc Setup a customer payment intent
// @access Private
exports.setupPaymentIntent = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const profile = await Profile.findOne({ userId });

  if (!profile) {
    res.status(400);
    throw new Error("User does not have a profile");
  }

  if (!profile.stripeId) {
    res.status(400);
    throw new Error("User does not have a stripe Id");
  }

  const customer = await stripe.customers.retrieve(profile.stripeId);

  if (!customer) {
    res.status(500);
    throw new Error("Couldn't retrieve customer");
  }

  const intent = await stripe.setupIntents.create({
    customer: customer.id,
    payment_method_types: ["card"],
  });

  if (!intent) {
    res.status(500);
    throw new Error("Couldn't setup payment intent");
  }

  res.status(200).json({ client_secret: intent.client_secret });
});

// @route GET /payment/list-payment-methods
// @desc List payment methods
// @access Private
exports.listPaymentMethods = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const profile = await Profile.findOne({ userId });

  if (!profile) {
    res.status(400);
    throw new Error("User does not have a profile");
  }

  if (!profile.stripeId) {
    res.status(400);
    throw new Error("User does not have a stripe Id");
  }

  const customer = await stripe.customers.retrieve(profile.stripeId);

  if (!customer) {
    res.status(500);
    throw new Error("Couldn't retrieve customer");
  }

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
  const userId = req.user.id;

  const { amount, currancy, paymentMethod } = req.body;

  const profile = await Profile.findOne({ userId });

  if (!profile) {
    res.status(400);
    throw new Error("User does not have a profile");
  }

  if (!profile.stripeId) {
    res.status(400);
    throw new Error("User does not have a stripe Id");
  }

  const customer = await stripe.customers.retrieve(profile.stripeId);

  if (!customer) {
    res.status(500);
    throw new Error("Couldn't retrieve customer");
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "cad",
    customer: customer.id,
    payment_method: "pm_1Jq22lL3yecqfVKobxHR91Jg",
    off_session: true,
    confirm: true,
  });

  res.status(200).json({ paymentIntent });
});

// @route POST /payment/create-payment-intent
// @desc Create payment intent
// @access Private
exports.createPaymentMethod = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const profile = await Profile.findOne({ userId });

  if (!profile) {
    res.status(400);
    throw new Error("User does not have a profile");
  }

  if (!profile.stripeId) {
    res.status(400);
    throw new Error("User does not have a stripe Id");
  }

  const customer = await stripe.customers.retrieve(profile.stripeId);

  if (!customer) {
    res.status(500);
    throw new Error("Couldn't retrieve customer");
  }

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
