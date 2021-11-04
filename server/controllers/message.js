const Conversation = require("../Models/Conversation");
const asyncHandler = require("express-async-handler");
const Message = require("../models/Message");

// @route POST /conversation
// @desc Create a new conversation
// @access Private
exports.createMessage = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const { conversationId, text, sendTime } = req.body;

  if (!conversationId || !text || !sendTime) {
    res.status(400);
    throw new Error("Missing parameters");
  }
  const conversation = await Conversation.findById(conversationId);
  if (conversation.user1Id !== userId || conversation.user2Id !== userId) {
    res.status(403);
    throw new Error("Cannot post to others conversation");
  }

  conversation = {
    conversationId: conversationId,
    senderId: userId,
    text: text,
    sendTime: sendTime
  };
  const conv = await Request.create(conversation);
  res.status(201).json(conv);
});
