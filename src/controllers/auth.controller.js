const { validationResult } = require('express-validator');

const { login, register } = require('../models/Auth.model');
const httpStatus = require('../config/httpStatus');

//@ router   POST /api/auth/login
//@ des      login into app
//@ access   public
module.exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(httpStatus.BAD_REQUEST).json({ errors: errors.array() });
      return;
    }

    const data = {
      email: req.body.email,
      password: req.body.password,
    };

    const token = await login(data);

    return res.status(httpStatus.ok).json({
      msg: 'LOGIN',
      data: { token },
      success: true,
    });
  } catch (err) {
    console.error(err.message);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: err.message,
      data: null,
      success: false,
    });
  }
};

//@ router   POST /api/auth/login
//@ des      create a new user
//@ access   public
module.exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };

    const token = await register(data);

    return res.status(httpStatus.CREATED).json({
      msg: 'REGISTER',
      data: { token },
      success: true,
    });
  } catch (err) {
    console.error(err.message);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: err.message,
      data: null,
      success: false,
    });
  }
};
