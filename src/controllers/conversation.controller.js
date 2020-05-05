const {
  getConversations,
  getLatestConversation,
} = require('../models/Conversation.model');

const { success, error } = require('../utils/response');

//@ router   GET /api/conversations
//@ des      get all conversation
//@ access   private
module.exports.getConversations = async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const conversations = await getConversations(currentUserId);

    return success(res, 'GET CONVERSATION', { conversations }, true);
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
  }
};

//@ router   GET /api/conversations
//@ des      get latest conversation
//@ access   private
module.exports.getLatestConversation = async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const latestConversation = await getLatestConversation(currentUserId);

    return success(
      res,
      'GET LATEST CONVERSATION',
      { latestConversation },
      true
    );
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
  }
};
