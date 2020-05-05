const {
  getMessengers,
  sendMessenger,
  getMessengerById,
} = require('../models/Messenger.model');
const { validationResult } = require('express-validator');

const { success, error, create } = require('../utils/response');

//@ router   GET /api/messengers/id
//@ des      get all messenger by conversation and use id of conversation
//@ access   private
module.exports.getMess = async (req, res) => {
  try {
    const conversationId = req.params.id;

    const messengers = await getMessengers(conversationId);

    return success(res, 'get messenger of user', { messengers }, true);
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
  }
};

//@ router   POST /api/messenger
//@ des      send mess
//@ access   private
module.exports.sendMess = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const messenger = await sendMessenger(
      req.user.id,
      req.body.receiverId,
      req.body.text
    );

    const newMessenger = await getMessengerById(messenger._id);

    return create(res, 'Send messenger', { newMessenger }, true);
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
  }
};
