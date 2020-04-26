const { Messenger } = require('../schema/Messenger');
const { Conversation } = require('../schema/Conversation');
const { findReceiver } = require('./Conversation.model');

module.exports.getMessengers = async (senderId, receiverId) => {
  try {
    const conversation = await Conversation.findOne({
      $or: [
        { 'sender._id': senderId, 'receiver._id': receiverId },
        { 'receiver._id': senderId, 'sender._id': receiverId },
      ],
    });

    const messengers = await Messenger.find({
      conversationId: conversation._id,
    });

    return messengers;
  } catch (err) {
    throw err;
  }
};

module.exports.sendMessenger = async ({ senderId, receiverId, text }) => {
  try {
    const conversation = await findReceiver(senderId, receiverId, text);

    const newMessenger = new Messenger({
      sender: {
        ...conversation.sender,
      },
      receiver: {
        ...conversation.receiver,
      },
      text: text,
      conversationId: conversation._id,
    });

    await newMessenger.save();

    return newMessenger;
  } catch (err) {
    throw err;
  }
};
