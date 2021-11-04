const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  conversationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Conversation",
    required: true,
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  sendTime: {
    type: Date,
    required: true,
  },
  seen: {
    type: Boolean,
    default: false,
    required: true,
  },
});

module.exports = message = mongoose.model("message", messageSchema);
