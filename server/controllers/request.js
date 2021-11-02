const User = require("../models/User");
const Request = require("../Models/Request");
const asyncHandler = require("express-async-handler");

// @route GET /request
// @desc List of requests for logged in user
// @access Private
exports.getRequests = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const requests = await Request.find({
    $or: [{ userId: userId }, { sitterId: userId }],
  })
    .populate([
      { path: "sitterId", select: "username" },
      { path: "userId", select: "username" },
    ])
    .sort({ startDate: "desc" })
    .exec();

  res.send({ requests });
});

// @route POST /request
// @desc Create a new request
// @access Private
exports.createRequest = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const { sitterId, startDate, endDate } = req.body;

  if (!startDate || !endDate) {
    res.status(400);
    throw new Error("Incomplete date field");
  }

  const sitterExists = await User.findById(sitterId);

  if (!sitterExists) {
    res.status(400);
    throw new Error("Invalid sitter id");
  }

  const request = {
    userId: userId,
    sitterId: sitterId,
    startDate: startDate,
    endDate: endDate,
  };

  const resp = await Request.create(request);

  res.status(201).json(resp);
});

// @route PATCH /request
// @desc Update request with approved or decline
// @access Private
exports.updateRequest = asyncHandler(async (req, res, next) => {
  const requestId = req.params.id;

  const userId = req.user.id;

  const { status } = req.body;

  if (status !== "declined" && status !== "accepted" && status !== "pending") {
    res.status(400);
    throw new Error("Invalid status field");
  }

  const request = await Request.findById(requestId);

  if (!request) {
    res.status(400);
    throw new Error("Invalid request id");
  }

  if (request.sitterId.toString() !== userId) {
    res.status(400);
    throw new Error("Unauthorized user");
  }

  request.status = status;

  await request.save();

  res.status(200).json(request);
});
