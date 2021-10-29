const stripe = require("stripe")(process.env.STRIPE_KEY);

const verifyStripeCustomer = async (req) => {
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

  return customer;
};

module.exports = verifyStripeCustomer;
