const { getMessengers, sendMessenger } = require('../models/Messenger.model');
const { validationResult } = require('express-validator');

//@ router   GET /api/messengers/id
//@ des      get all messenger by conversation and user id of receiver
//@ access   private
module.exports.getMess = async (req, res) => {
  try {
    const senderId = req.user.id;
    const receiverId = req.params.id;

    const messengers = await getMessengers(senderId, receiverId);

    return res.status(200).json(messengers);
  } catch (err) {}
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

    return res.status(200).json(newMessenger);
  } catch (err) {}
};
