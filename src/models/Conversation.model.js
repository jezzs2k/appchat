const { Conversation } = require('../schema/Conversation');
const { getUserById } = require('./User.model');

module.exports.createConversation = async ({
  senderId,
  receiverId,
  text = 'xin chao',
}) => {
  try {
    const sender = await getUserById(senderId);
    const receiver = await getUserById(receiverId);

    const newConversation = new Conversation({
      sender,
      receiver,
      lastMess: text,
    });

    await newConversation.save();

    return newConversation;
  } catch (err) {
    throw err;
  }
};

module.exports.checkConversationExists = async (senderId, receiverId) => {
  try {
    const conversation = await Conversation.findOne({
      $or: [
        { sender: senderId, receiver: receiverId },
        { receiver: senderId, sender: receiverId },
      ],
    });

    if (!conversation) {
      return null;
    } else {
      return conversation._id;
    }
  } catch (err) {
    throw err;
  }
};

module.exports.getLatestConversation = async (currentUserId) => {
  try {
    const conversationLatest = await Conversation.findOne(
      {
        $or: [{ sender: currentUserId }, { receiver: currentUserId }],
      },
      [],
      { sort: { updatedAt: -1 } }
    ).populate('sender receiver');

    return conversationLatest;
  } catch (err) {
    throw err;
  }
};

module.exports.getConversations = async (currentUserId) => {
  try {
    const conversations = await Conversation.find(
      {
        $or: [{ sender: currentUserId }, { receiver: currentUserId }],
      },
      [],
      { sort: { updatedAt: -1 } }
    ).populate('sender receiver');

    if (!conversations) {
      throw new Error("User don't have messenger");
    }

    return conversations;
  } catch (err) {
    throw err;
  }
};

module.exports.updateConversation = async (conversationId, text) => {
  try {
    const conversation = await Conversation.findByIdAndUpdate(
      { _id: conversationId },
      {
        $set: {
          lastMess: text,
          isRead: false,
        },
      }
    );

    return conversation;
  } catch (err) {
    throw err;
  }
};

module.exports.hasRead = async () => {
  try {
    const conversation = await Conversation.findByIdAndUpdate(
      { _id: conversationId },
      {
        $set: {
          isRead: false,
        },
      }
    );
    return conversation;
  } catch (err) {
    throw err;
  }
};
