const {
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../models/User.model');

//@ router   GET /api/users
//@ des      get all user
//@ access   private
module.exports.getAllUser = async (req, res) => {
  try {
    const users = await getAllUser();

    return res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server error');
  }
};

//@ router   GET /api/users/:id
//@ des      get user by id
//@ access   private
module.exports.getUserById = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await getUserById(userId);

    return res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server error');
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

    return res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server error');
  }
};

//@ router   DELETE /api/users
//@ des      delete User
//@ access   private
module.exports.deleteUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const byeUser = await deleteUser(userId);

    return res.status(200).json(byeUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server error');
  }
};
