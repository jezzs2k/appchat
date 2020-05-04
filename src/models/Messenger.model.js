const { Messenger } = require('../schema/Messenger');
const { findReceiver } = require('./Conversation.model');

module.exports.getMessengers = async (conversationId) => {
  try {
    const messengers = await Messenger.find({
      conversationId,
    });

    return messengers;
  } catch (err) {
    throw err;
  }
};

module.exports.sendMessenger = async (senderId, receiverId, text) => {
  try {
    const conversation = await findReceiver(senderId, receiverId, text);
    const { sender, receiver } = conversation;

    let newMessenger = null;

    if (sender._id == senderId) {
      newMessenger = new Messenger({
        sender: {
          ...sender,
        },
        receiver: {
          ...receiver,
        },
        text: text,
        conversationId: conversation._id,
      });
    }

    if (sender._id == receiverId) {
      newMessenger = new Messenger({
        sender: {
          ...receiver,
        },
        receiver: {
          ...sender,
        },
        text: text,
        conversationId: conversation._id,
      });
    }

    await newMessenger.save();

    return newMessenger;
  } catch (err) {
    throw err;
  }
};
