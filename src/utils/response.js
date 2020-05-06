const httpStatus = require('../config/httpStatus');

module.exports.success = (res, msg, data, success) => {
  return res.status(httpStatus.ok).json({
    msg,
    data,
    success,
  });
};

module.exports.create = (res, msg, data, success) => {
  return res.status(httpStatus.CREATED).json({
    msg,
    data,
    success,
  });
};

module.exports.error = (res, msg = 'Internal server error', data, success) => {
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    msg,
    data,
    success,
  });
};
