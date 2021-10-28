const mongoose = require("mongoose");
const Availability = require("../Models/Availability");
const asyncHandler = require("express-async-handler");

// @route GET /Availability
// @desc the Availability list  of the relevant user
// @access Private
exports.getAvailability = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const availability = await Availability.find({
    userId,
  });

  res.send({ availability });
});

// @route POST /Availability
// @desc Create a new Availability time solts
// @access Private
exports.createAvailability = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const { startDate, endDate } = req.body;

  if (!startDate || !endDate) {
    res.status(400);
    throw new Error("Incomplete date field");
  }
  const startDateExists = await Availability.findOne({ userId, startDate });

  if (startDateExists) {
    res.status(400);
    throw new Error(
      "There is already a availability period with this start date"
    );
  }
  const endDateExists = await Availability.findOne({ userId, endDate });

  if (endDateExists) {
    res.status(400);
    throw new Error(
      "There is already a availability period with this end date"
    );
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
exports.updateAvailability = asyncHandler(async (req, res) => {
  const availabilityId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new Error("Cannot find such available period");
  }
  const userId = req.user.id;

  const { startDate, endDate } = req.body;

  const availability = await Availability.findById(availabilityId);

  if (!availability || availability.userId != userId) {
    res.status(404);
    throw new Error("Invalid availability id");
  }
  if (availability.startDate !== startDate) {
    const startDateExists = await Availability.findOne({ userId, startDate });
    if (startDateExists) {
      res.status(400);
      throw new Error(
        "There is already a availability period with this start date"
      );
    } else {
      availability.startDate = startDate;
    }
  }
  if (availability.endDate !== endDate) {
    const endDateExists = await Availability.findOne({ userId, endDate });
    if (endDateExists) {
      res.status(400);
      throw new Error(
        "There is already a availability period with this end date"
      );
    } else {
      availability.endDate = endDate;
    }
  }

  await availability.save();

  res.status(200).json(availability);
});
