const {
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../models/User.model');

const { success, error } = require('../utils/response');

//@ router   GET /api/users
//@ des      get all user
//@ access   private
module.exports.getAllUser = async (req, res) => {
  try {
    const users = await getAllUser();

    return success(res, 'GET USERS', users, true);
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
  }
};

//@ router   GET /api/users/user
//@ des      get user
//@ access   private
module.exports.getUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await getUserById(userId);

    return success(res, 'GET USER', user, true);
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
  }
};

//@ router   GET /api/users/:id
//@ des      get user by id
//@ access   private
module.exports.getUserById = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await getUserById(userId);

    return success(res, 'GET USER BY ID', user, true);
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
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

    return success(res, 'UPDATE USER', user, true);
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
  }
};

//@ router   DELETE /api/users
//@ des      delete User
//@ access   private
module.exports.deleteUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const removeUser = await deleteUser(userId);

    return success(res, 'DELETE USER', removeUser, true);
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
  }
};
