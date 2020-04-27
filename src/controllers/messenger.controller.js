const { getMessengers, sendMessenger } = require('../models/Messenger.model');
const { validationResult } = require('express-validator');

const httpStatus = require('../config/httpStatus');

//@ router   GET /api/messengers/id
//@ des      get all messenger by conversation and user id of receiver
//@ access   private
module.exports.getMess = async (req, res) => {
  try {
    const senderId = req.user.id;
    const receiverId = req.params.id;

    const messengers = await getMessengers(senderId, receiverId);

    return res.status(httpStatus.ok).json({
      msg: 'get messenger of user',
      data: { messengers },
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

    const data = {
      senderId: req.user.id,
      receiverId: req.body.receiverId,
      text: req.body.text,
    };

    const newMessenger = await sendMessenger(data);

    return res.status(httpStatus.CREATED).json({
      msg: 'Send messenger',
      data: { newMessenger },
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
