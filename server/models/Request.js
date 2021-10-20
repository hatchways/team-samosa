const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sitterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "declined"],
    lowercase: true,
    trim: true,
    default: "pending",
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Request", requestSchema);
