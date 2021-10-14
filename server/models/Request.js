const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const requestSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sitter_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  accepted: {
    type: Boolean,
    default: false,
    required: true,
  },
  declined: {
    type: Boolean,
    default: false,
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
    required: true,
  },
});

module.exports = mongoose.model("Request", requestSchema);
