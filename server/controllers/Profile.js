const mongoose = require("mongoose");
const Profile = require("../Models/Profile");
const asyncHandler = require("express-async-handler");

// @route GET /profiles
// @desc List of all profiles
// @access Public
exports.getProfiles = asyncHandler(async (req, res) => {
  const profiles = await Profile.find({});

  res.send({ profiles });
});

// @route GET /profile
// @desc the profile of the relevant user
// @access Public
exports.getProfile = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const profile = await Profile.findOne({ userId });

  if (!profile) {
    res.status(400);
    throw new Error("Invalid profile id");
  }

  res.send({ profile });
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
