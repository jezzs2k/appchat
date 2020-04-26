const { Conversation } = require('../schema/Conversation');
const { getUserById } = require('./User.model');

const createConversation = async ({ sender, receiver, text }) => {
  try {
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

module.exports.findReceiver = async (
  senderId,
  receiverId,
  text = 'Xin Chao'
) => {
  try {
    let conversation = await Conversation.findOne({
      $or: [
        { 'sender._id': senderId, 'receiver._id': receiverId },
        { 'receiver._id': senderId, 'sender._id': receiverId },
      ],
    }).select('_id sender receiver');

    if (!conversation) {
      const sender = await getUserById(senderId);
      const receiver = await getUserById(receiverId);

      conversation = createConversation({ sender, receiver, text });
    } else {
      conversation = await Conversation.findByIdAndUpdate(
        { _id: conversation._id },
        {
          $set: {
            lastMess: text,
          },
        }
      );
    }

    return conversation;
  } catch (err) {
    throw err;
  }
};

module.exports.getLatestConversation = async (currentUserId) => {
  try {
    const conversationLatest = await Conversation.findOne(
      {
        $or: [
          { 'sender._id': currentUserId },
          { 'receiver._id': currentUserId },
        ],
      },
      [],
      { sort: { updatedAt: -1 } }
    );

    return conversationLatest;
  } catch (err) {
    throw err;
  }
};

module.exports.getConversations = async (currentUserId) => {
  try {
    const conversations = await Conversation.find({
      $or: [{ 'sender._id': currentUserId }, { 'receiver._id': currentUserId }],
    });

    if (!conversations) {
      throw new Error("User don't have messenger");
    }

    return conversations;
  } catch (err) {
    throw err;
  }
};
