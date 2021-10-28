const stripe = require("stripe")(process.env.STRIPE_KEY);
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route POST /payments/create
// @desc Create new customer
// @access Private

exports.createCustomer = asyncHandler(async (req, res, next) => {
  const customer = await stripe.customers.create({
    description: "My First Test Customer (created for API docs)",
  });
  res.status(200).json({ customer });
});
