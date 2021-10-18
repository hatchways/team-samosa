const mongoose = require("mongoose");
const Profile = require("../Models/Profile");
const asyncHandler = require("express-async-handler");

// @route GET /profile
// @desc the profile of the relevant user
// @access Private
exports.getProfile = asyncHandler(async (req, res) => {
    const userId = req.user.id;

    const profile = await Profile.findOne({ userId });

    res.send({ profile });
});

// @route POST /profile
// @desc Create a new profile
// @access Private
exports.createProfile = asyncHandler(async (req, res) => {
    const userId = req.user.id;

    const { firstName, lastName, email, phoneNum } = req.body;

    if (!firstName || !lastName || !email || !phoneNum) {
        res.status(400);
        throw new Error("Incomplete profile field");
    }

    const emailExists = await Profile.findOne({ email });

    if (emailExists) {
        res.status(400);
        throw new Error("The email is already in use");
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
        email: email,
        phoneNum: phoneNum,
    };

    const resp = await Profile.create(profile);

    res.status(201).json(resp);
});

// @route PATCH /Profile
// @desc Update profile with approved or decline
// @access Private
exports.updateProfile = asyncHandler(async (req, res) => {
    const userId = req.user.id;

    const { profileupdates } = req.body;

    const profile = await Profile.findById(userId);

    if (!profile) {
        res.status(404);
        throw new Error("User id do not exist! Error happened!");
    }

    profile.status = profileupdates;

    await profile.save();

    res.status(200).json(profile);
});