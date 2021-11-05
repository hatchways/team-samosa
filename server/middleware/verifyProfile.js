const verifyProfile = async (req, res, next) => {
  const userId = req.user.id;
  const profile = await Profile.findOne({ userId });
  if (!profile) {
    res.status(400);
    throw new Error("User does not have a profile");
  }

  req.profile = profile;
  next();
};

module.exports = verifyProfile;
