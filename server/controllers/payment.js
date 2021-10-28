const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const User = require("../models/User");
const Profile = require("../Models/Profile");
const asyncHandler = require("express-async-handler");

// @route POST /payment/create
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
// @desc Create new customer
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
