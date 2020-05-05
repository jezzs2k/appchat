const { Messenger } = require('../schema/Messenger');
const {
  checkConversationExists,
  createConversation,
  updateConversation,
} = require('./Conversation.model');

module.exports.getMessengers = async (conversationId) => {
  try {
    const messengers = await Messenger.find({
      conversation: conversationId,
    }).populate('sender receiver');

    return messengers;
  } catch (err) {
    throw err;
  }
};

module.exports.getMessengerById = async (id) => {
  try {
    const messenger = await Messenger.findById(id).populate('sender receiver');

    return messenger;
  } catch (err) {
    throw err;
  }
};

module.exports.sendMessenger = async (senderId, receiverId, text) => {
  try {
    const onConversation = await checkConversationExists(senderId, receiverId);

    await updateConversation(onConversation, text);

    const newMessenger = new Messenger({
      sender: senderId,
      receiver: receiverId,
      text,
      conversation: onConversation,
    }).populate('sender receiver');

    await newMessenger.save();

    return newMessenger;
  } catch (err) {
    throw err;
  }
};
