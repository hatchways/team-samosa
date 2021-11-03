const mongoose = require("mongoose");
const Profile = require("../Models/Profile");
const asyncHandler = require("express-async-handler");

// @route POST /profile/mock
// @desc Create a new profile
// @access Public
exports.createMockProfile = asyncHandler(async (req, res) => {
  const {
    userId,
    firstName,
    lastName,
    gender,
    birthDate,
    phoneNum,
    address,
    description,
    isSitter,
  } = req.body;

  if (!firstName || !lastName || !phoneNum) {
    res.status(400);
    throw new Error("Incomplete profile field");
  }
  const userIdExists = await Profile.findOne({ userId });
  if (userIdExists) {
    res.status(400);
    throw new Error("There already a profile");
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
    isSitter: isSitter,
  };

  const resp = await Profile.create(profile);

  res.status(201).json(resp);
});
