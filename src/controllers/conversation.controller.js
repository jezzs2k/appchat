const {
  getConversations,
  getLatestConversation,
} = require('../models/Conversation.model');

const httpStatus = require('../config/httpStatus');

//@ router   GET /api/conversations
//@ des      get all conversation
//@ access   private
module.exports.getConversations = async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const conversations = await getConversations(currentUserId);

    return res.status(httpStatus.ok).json({
      msg: 'GET CONVERSATION',
      data: { conversations },
      success: true,
    });
  } catch (err) {
    console.error(err.message);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: 'internal server error',
      data: null,
      success: false,
    });
  }
};

//@ router   GET /api/conversations
//@ des      get latest conversation
//@ access   private
module.exports.getLatestConversation = async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const latestConversation = await getLatestConversation(currentUserId);

    return res.status(200).json({
      msg: 'GET LATEST CONVERSATION',
      data: { latestConversation },
      success: true,
    });
  } catch (err) {
    console.error(err.message);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: 'internal server error',
      data: null,
      success: false,
    });
  }
};
