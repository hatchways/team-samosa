const mongoose = require("mongoose");
const Profile = require("../Models/Profile");
const asyncHandler = require("express-async-handler");
const verifyToken = require("../utils/verifyToken");
const protect = require("../middleware/auth");

// @route GET /profiles
// @desc List of all profiles
// @access Public
exports.getProfiles = asyncHandler(async (req, res) => {
  const resp = await Profile.find({ isSitter: true });

  const profiles = resp.map((element) => {
    return {
      firstName: element.firstName,
      lastName: element.lastName,
      description: element.description,
      photoUrl: element.photoUrl,
    };
  });

  res.send({ profiles });
});

// @route GET /profile
// @desc Returns public profile or full profile for auth user
// @access Public
exports.getProfile = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  const resp = await Profile.findOne({ userId });
  if (!resp) {
    res.status(404);
    throw new Error("Invalid profile id");
  }

  if (req.headers.cookie) {
    const user = verifyToken(req.headers.cookie);
    if (user.id === userId) {
      const profile = resp;
      res.send({ profile });
    }
  } else {
    const profile = {
      firstName: resp.firstName,
      lastName: resp.lastName,
      description: resp.description,
      photoUrl: resp.photoUrl,
    };

    res.send({ profile });
  }
});

// @route POST /profile
// @desc Create a new profile
// @access Private
exports.createProfile = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const {
    firstName,
    lastName,
    gender,
    birthDate,
    phoneNum,
    address,
    description,
  } = req.body;

  if (!firstName || !lastName || !phoneNum) {
    res.status(400);
    throw new Error("Incomplete profile field");
  }

  const phoneNumExists = await Profile.findOne({ phoneNum });

  if (phoneNumExists) {
    res.status(400);
    throw new Error("The phone number is already in use");
  }

  const profile = {
    userId: userId,
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    birthDate: birthDate,
    phoneNum: phoneNum,
    address: address,
    description: description,
  };

  const resp = await Profile.create(profile);

  res.status(201).json(resp);
});

// @route PATCH /Profile
// @desc Update profile with approved or decline
// @access Private
exports.updateProfile = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const { profileUpdates } = req.body;

  const profile = await Profile.findById(userId);

  if (!profile) {
    res.status(404);
    throw new Error("User id do not exist! Error happened!");
  }

  profile.status = profileUpdates;

  await profile.save();

  res.status(200).json(profile);
});
