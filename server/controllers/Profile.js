const mongoose = require("mongoose");
const User = require("../models/User");
const Profile = require("../Models/Profile");
const asyncHandler = require("express-async-handler");
const verifyToken = require("../utils/verifyToken");
const protect = require("../middleware/auth");
const { validateRegister } = require("../validate");

// @route GET /profiles
// @desc List of all profiles
// @access Public
exports.getProfiles = asyncHandler(async (req, res) => {
  const profiles = await Profile.find(
    { isSitter: true },
    "_id userId firstName lastName photoUrl description"
  );

  res.send({ profiles });
});

// @route GET /profile
// @desc Returns public profile or full profile for auth user
// @access Public
exports.getProfile = asyncHandler(async (req, res, next) => {
  var userId = req.params.id;

  if (userId) {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).send("Bad Request");
    }
  } else {
    userId = req.user.id;
  }

  const resp = await Profile.findOne({ userId });
  if (!resp) {
    res.status(404);
    throw new Error("Invalid profile id");
  }

  if (req.headers.cookie) {
    const user = verifyToken(req.headers.cookie);
    if (user.id === userId) {
      const profile = resp;
      res.send({
        success: {
          _id: resp._id,
          firstName: profile.firstName,
          lastName: profile.lastName,
          gender: profile.gender,
          birthDate: profile.birthDate,
          email: user.email,
          phoneNum: profile.phoneNum,
          address: profile.address,
          description: profile.description,
        },
      });
    }
  } else {
    const profile = {
      _id: resp._id,
      userId: resp.userId,
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
  };

  const resp = await Profile.create(profile);

  res.status(201).json(resp);
});

// @route PATCH /Profile
// @desc Update profile with approved or decline
// @access Private
exports.updateProfile = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const {
    firstName,
    lastName,
    gender,
    birthDate,
    email,
    phoneNum,
    address,
    description,
  } = req.body;

  const profile = await Profile.findOne({ userId });

  if (!profile) {
    res.status(404);
    throw new Error("User id do not exist! Error happened!");
  }
  if (profile.firstName !== firstName) {
    profile.firstName = firstName;
  }
  if (profile.lastName !== lastName) {
    profile.lastName = lastName;
  }
  if (profile.gender !== gender) {
    profile.gender = gender;
  }
  if (profile.birthDate !== birthDate) {
    profile.birthDate = birthDate;
  }
  if (profile.address !== address) {
    profile.address = address;
  }
  if (profile.phoneNum !== phoneNum) {
    profile.phoneNum = phoneNum;
  }
  if (profile.description !== description) {
    profile.description = description;
  }
  await profile.save();

  const user = await User.findOne({ _id: userId });
  if (user.email !== email) {
    user.email = email;
    await user.save();
  }
  res.status(200).json(user);
});
