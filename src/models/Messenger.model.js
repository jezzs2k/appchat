const { Messenger } = require('../schema/Messenger');
const { Conversation } = require('../schema/Conversation');
const { findReceiver } = require('./Conversation.model');

module.exports.getMessengers = async ({ senderId, receiverId }) => {
  try {
    const conversation = await Conversation.findOne({
      $or: [
        { senderId: senderId, receiverId: receiverId },
        { receiverId: senderId, senderId: receiverId },
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

module.exports.sendMessenger = async ({ sender, receiver, text }) => {
  try {
    const conversation = findReceiver({ sender, receiver, text });

    const newMessenger = new Messenger({
      sender: {
        name: sender.name,
        avatar: sender.avatar,
      },
      receiver: {
        name: receiver.name,
        avatar: receiver.avatar,
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
