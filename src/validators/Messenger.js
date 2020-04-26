const { body } = require('express-validator');

const { SEND_MESS } = require('./types');

exports.validate = (method) => {
  switch (method) {
    case SEND_MESS:
      return [
        body('receiverId', 'Have must  id of receiver').exists(),
        body('text', 'Text have clear').trim().not().isEmpty().escape(),
      ];
  }
};
