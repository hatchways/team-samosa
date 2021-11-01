const verifyProfile = async (req) => {
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

  return profile;
};

module.exports = verifyProfile;
