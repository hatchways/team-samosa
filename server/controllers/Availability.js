const mongoose = require("mongoose");
const Availability = require("../Models/Availability");
const asyncHandler = require("express-async-handler");

// @route GET /Availability
// @desc the Availability list  of the relevant user
// @access Private
exports.getAvailability = asyncHandler(async (req, res, next) => {
    const userId = req.user.id;

    const availability = await Availability.find({
        $or: [{ userId: userId }]
    });

    res.send({ availability });
});

// @route POST /Availability
// @desc Create a new Availability time solts
// @access Private
exports.createAvailability = asyncHandler(async (req, res, next) => {
    const userId = req.user.id;

    const { startDate, endDate } = req.body;

    if (!startDate || !endDate) {
        res.status(400);
        throw new Error("Incomplete date field");
    }
    const startDateExists = await Availability.findOne({ userId, startDate });

    if (startDateExists) {
        res.status(400);
        throw new Error("There is already a availability period with this start date");
    }
    const endDateExists = await Availability.findOne({ userId, endDate });

    if (endDateExists) {
        res.status(400);
        throw new Error("There is already a availability period with this end date");
    }

    const availability = {
        userId: userId,
        startDate: startDate,
        endDate: endDate,
    };

    const resp = await Availability.create(availability);

    res.status(201).json(resp);
});

// @route PATCH /Availability
// @desc Update Availability period with approved or decline
// @access Private
exports.updateAvailability = asyncHandler(async (req, res, next) => {
    const availabilityId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        throw new Error("Cannot find such available period");
    }
    const userId = req.user.id;

    const { availabilityupdates } = req.body;

    const availability = await Availability.findById(availabilityId);

    if (!availability) {
        res.status(404);
        throw new Error("Invalid availability id");
    }

    availability.status = availabilityupdates;

    const startDate = availability.startDate;

    const startDateExists = await Availability.findOne({ userId, startDate });

    if (startDateExists) {
        res.status(400);
        throw new Error("There is already a availability period with this start date");
    }

    const endDate = availability.endDate;

    const endDateExists = await Availability.findOne({ userId, endDate });

    if (endDateExists) {
        res.status(400);
        throw new Error("There is already a availability period with this end date");
    }

    await availability.save();

    res.status(200).json(availability);
});