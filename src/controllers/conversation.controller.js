const {
  getConversations,
  getLatestConversation,
} = require('../models/Conversation.model');

//@ router   GET /api/conversations
//@ des      get all conversation
//@ access   private
module.exports.getConversations = async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const conversations = await getConversations(currentUserId);

    return res.status(200).json(conversations);
  } catch (err) {
    console.error(err);
    res.status(500).json('server error');
  }
};

//@ router   GET /api/conversations
//@ des      get latest conversation
//@ access   private
module.exports.getLatestConversation = async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const latestConversation = await getLatestConversation(currentUserId);

    return res.status(200).json(latestConversation);
  } catch (err) {
    console.error(err);
    res.status(500).json('server error');
  }
};
