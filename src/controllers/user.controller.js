const {
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../models/User.model');

const httpStatus = require('../config/httpStatus');

//@ router   GET /api/users
//@ des      get all user
//@ access   private
module.exports.getAllUser = async (req, res) => {
  try {
    const users = await getAllUser();

    return res.status(httpStatus.ok).json({
      msg: 'GET USERS',
      data: users,
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

//@ router   GET /api/users/user
//@ des      get user
//@ access   private
module.exports.getUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await getUserById(userId);

    return res.status(httpStatus.ok).json({
      msg: 'GET USER',
      data: user,
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

//@ router   GET /api/users/:id
//@ des      get user by id
//@ access   private
module.exports.getUserById = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await getUserById(userId);

    return res.status(httpStatus.ok).json({
      msg: 'GET USER BY ID',
      data: user,
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

//@ router   PUT /api/users
//@ des      update User
//@ access   private
module.exports.updateUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = { ...req.body };

    const user = await updateUser(userId, data);

    return res.status(httpStatus.ok).json({
      msg: 'UPDATE USER',
      data: user,
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

//@ router   DELETE /api/users
//@ des      delete User
//@ access   private
module.exports.deleteUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const byeUser = await deleteUser(userId);

    return res.status(httpStatus.ok).json({
      msg: 'DELETE USER',
      data: byeUser,
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
