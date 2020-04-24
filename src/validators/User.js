const { body } = require('express-validator');
const { CREATE_USER, LOGIN } = require('./types');

exports.validate = (method) => {
  switch (method) {
    case CREATE_USER:
      return [
        body('name', 'username exists!').exists(),
        body('email', 'Email have ben valid!!').exists().isEmail(),
        body('password', 'Password have must more 6 characters log').isLength({
          min: 6,
        }),
      ];

    case LOGIN:
      return [
        body('email', 'Email have ben valid!!').exists().isEmail(),
        body('password', 'Password have must more 6 characters log').isLength({
          min: 6,
        }),
      ];
  }
};
