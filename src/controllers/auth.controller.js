const { validationResult } = require('express-validator');

const { login, register } = require('../models/Auth.model');

//@ router   POST /api/auth/login
//@ des      login into app
//@ access   public
module.exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const data = {
      email: req.body.email,
      password: req.body.password,
    };

    const token = await login(data);

    return res.status(200).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server error');
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

    return res.status(200).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server error');
  }
};
