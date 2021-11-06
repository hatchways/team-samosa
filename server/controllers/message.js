const Conversation = require("../Models/Conversation");
const asyncHandler = require("express-async-handler");
const Message = require("../models/Message");

// @route POST /conversation
// @desc Create a new conversation
// @access Private
exports.createMessage = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const { recipientId, text, sendTime } = req.body;

  if (!recipentId || !text || !sendTime) {
    res.status(400);
    throw new Error("Missing parameters");
  }
  const conversationExists = await Conversation.find(
    {
      $or: [
        { $or: [{ user1Id: userId }, { user2Id: recipientId }] },
        { $or: [{ user1Id: recipientId }, { user2Id: userId }] }
      ]
    });

  if (!conversationExists) {
    const conversation = {
      user1Id: userId,
      user2Id: recipentId,
    }
    conversationExists = await Conversation.create(conversation);
  }

  const message = {
    conversationId: conversationExists._id,
    senderId: userId,
    text: text,
    sendTime: sendTime
  };
  const mess = await Message.create(message);
  res.status(201).json(conv);
});
