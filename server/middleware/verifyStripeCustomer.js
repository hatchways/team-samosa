const stripe = require("stripe")(process.env.STRIPE_KEY);

const verifyStripeCustomer = async (req, res, next) => {
  const customer = await stripe.customers.retrieve(req.profile.stripeId);
  req.customer = customer;
  next();
};

module.exports = verifyStripeCustomer;
