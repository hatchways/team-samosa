const Profile = require("../Models/Profile");
const Conversation = require("../Models/Conversation");
const asyncHandler = require("express-async-handler");
const Message = require("../models/Message");


// @route GET /conversation
// @desc get all conversations relevant with the current user and all the messages
// @access Private
exports.getConversations = asyncHandler(async (req, res) => {
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
        convoJSON.senderId = convoJSON.user1Id == userId ? convoJSON.user1Id : convoJSON.user2Id;
        convoJSON.recipientId = convoJSON.user1Id == userId ? convoJSON.user2Id : convoJSON.user1Id;
        delete convoJSON[user1Id]; delete convoJSON[user2Id];
        let messages = await Message.find({ conversationId: data[i]._id }).sort({ sendTime: 'asc' }).map(message => message.toJSON());
        let profile = await Profile.findOne({ userId: convoJSON.recipientId }, "firstName, lastName photoUrl",).map(res => res.toJSON());
        convoJSON.lastmessage = messages[messages.length - 1].text;
        convoJSON.updatedAt = messages[messages.length - 1].sendTime;
        convoJSON.recipientPrpfile = profile

        for (let j = messages.length - 1; i > -1; i--) {
          if (messages[j].seen) {
            convoJSON.seen = j;
            break;
          }
        }
        conversations[i] = convo;
      }
    }
  });
  conversations.sort((a, b) => a.updatedAt >= b.updatedAt);
  res.send(conversations);

});
