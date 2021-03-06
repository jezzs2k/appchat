const { verify } = require('jsonwebtoken');
const defaultValue = require('../config/default');

const JWT_SECRET = defaultValue.JWT_SECRET;

module.exports = async (req, res, next) => {
  try {
    const token = req.header('auth-token');
    const decoded = verify(token, JWT_SECRET);

    if (!decoded) {
      res.status(400).json('No Token');
      return;
    }

    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err);
  }
};
