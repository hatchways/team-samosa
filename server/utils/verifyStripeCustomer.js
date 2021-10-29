const stripe = require("stripe")(process.env.STRIPE_KEY);
const verifyProfile = require("./verifyProfile");

const verifyStripeCustomer = async (req) => {
  const profile = await verifyProfile(req);

  const customer = await stripe.customers.retrieve(profile.stripeId);

  return customer;
};

module.exports = verifyStripeCustomer;
