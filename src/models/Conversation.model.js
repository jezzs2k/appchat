const { Conversation } = require('../schema/Conversation');

const createConversation = async ({ sender, receiver, text }) => {
  try {
    const newConversation = new Conversation({
      senderId: sender.id,
      receiverId: receiver.id,
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

module.exports.findReceiver = async ({
  sender,
  receiver,
  text = 'Xin Chao',
}) => {
  try {
    const conversation = await Conversation.findOne({
      $or: [
        { senderId: sender.id, receiverId: receiver.id },
        { receiverId: sender.id, senderId: receiver.id },
      ],
    });

    if (!conversation) {
      conversation = createConversation({ sender, receiver, text });
    }

    return conversation;
  } catch (err) {
    throw err;
  }
};

module.exports.getLatestConversation = async () => {
  try {
    const conversationLatest = await Conversation.findOne({}, [], {
      $orderby: { createdAt: -1 },
    });
    // const conversations = await Conversation.find({
    //     $or: [{ senderId: currentUserId },
    //     { receiverId: currentUserId }]
    // })

    // if (!conversations) {
    //     throw new Error('User don\'t have messenger');
    // }

    // conversations.find((conversation) => {

    // })

    return conversationLatest;
  } catch (err) {
    throw err;
  }
};

module.exports.getConversation = async (currentUserId) => {
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
