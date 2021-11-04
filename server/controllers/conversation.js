const Conversation = require("../Models/Conversation");
const asyncHandler = require("express-async-handler");
const Message = require("../models/Message");

// @route GET /conversation
// @desc get all conversations relevant with the current user and all the messages
// @access Private
exports.getConversations = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  if (!req.user) {
    res.sendStatus(401);
    throw new Error("Missing user data");
  }
  const conversations = await Conversation.find(
    { $or: [{ user1Id: userId }, { user2Id: userId }] },
    "_id user1Id user2Id",
  ).exec(async (err, data) => {
    if (err) {
      res.send({ err: 'Error occured while trying to fetch conversations' });
    }
    else {
      for (let i = 0; i < data.length; i++) {
        const convo = conversations[i];
        const convoJSON = convo.toJSON();
        let messages = await Message.find({ conversationId: data[i]._id }).sort({ sendTime: 'asc' }).map(message => message.toJSON());
        convoJSON.lastmessage = messages[messages.length - 1].text;
        convoJSON.updatedAt = messages[messages.length - 1].text;
        for (let j = messages.length - 1; i > -1; i--) {
          if (messages[j].seen) {
            convoJSON.seen = j;
            break;
          }
        }
        conversations[i] = convo;
      }
      res.send(conversations);
    }
  });
});

// @route POST /conversation
// @desc Create a new conversation
// @access Private
exports.createConversation = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const { user2Id } = req.body;

  if (!user2Id) {
    res.status(400);
    throw new Error("Missing recipent");
  }

  const conversationExists = await Conversation.find(
    {
      $or: [
        { $or: [{ user1Id: userId }, { user2Id: user2Id }] },
        { $or: [{ user1Id: user2Id }, { user2Id: userId }] }
      ]
    });

  if (!conversationExists) {
    res.status(400);
    throw new Error("There existing conversation between these two users!");
  }

  const conversation = {
    user1Id: userId,
    user2Id: user2Id,
  };
  const conv = await Request.create(conversation);
  res.status(201).json(conv);
});
