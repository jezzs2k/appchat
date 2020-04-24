const { verify } = require('jsonwebtoken');

module.exports.authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('auth-token');
    const decoded = verify(token, 'hieu');

    if (!decoded) {
      res.status(400).json('No Token');
    }

    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err);
  }
};
