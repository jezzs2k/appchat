const { Conversation } = require('../schema/Conversation');

const createConversation = async ({ sender, receiver, text }) => {
  try {
    const newConversation = new Conversation({
      senderId: sender._id,
      receiverId: receiver._id,
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

module.exports.findReceiver = async (sender, receiver, text = 'Xin Chao') => {
  try {
    let conversation = await Conversation.findOne({
      $or: [
        { senderId: sender._id, receiverId: receiver._id },
        { receiverId: sender._id, senderId: receiver._id },
      ],
    }).select('_id');

    if (!conversation) {
      conversation = createConversation({ sender, receiver, text });
    }

    return conversation;
  } catch (err) {
    throw err;
  }
};

module.exports.getLatestConversation = async (currentUserId) => {
  try {
    const conversationLatest = await Conversation.find({
      $or: [{ senderId: currentUserId }, { receiverId: currentUserId }],
    });

    if (conversationLatest.length > 1) {
      conversationLatest.sort();
    }

    return conversationLatest[0];
  } catch (err) {
    throw err;
  }
};

module.exports.getConversations = async (currentUserId) => {
  try {
    const conversations = await Conversation.find({
      $or: [{ senderId: currentUserId }, { receiverId: currentUserId }],
    });

    if (!conversations) {
      throw new Error("User don't have messenger");
    }

    return conversations;
  } catch (err) {
    throw err;
  }
};
