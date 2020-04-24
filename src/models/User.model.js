const { User } = require('../schema/User');

module.exports.getAllUser = async () => {
  try {
    const users = await User.find().select('local').select('google');

    return users;
  } catch (err) {
    throw err;
  }
};

module.exports.getUserById = async (id) => {
  try {
    const user = await User.findById(id).select('local');
    if (!user) {
      throw new Error('Nguoi dung khong ton tai');
    }
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports.updateUser = async (_id, data) => {
  try {
    const user = await User.findById(_id).select('local');
    if (!user) {
      throw new Error('Nguoi dung khong ton tai');
    }

    const user = await User.findByIdAndUpdate(
      _id,
      { $set: data },
      { new: true }
    );

    return user;
  } catch (err) {
    throw err;
  }
};

module.exports.updateUser = async (_id) => {
  try {
    const user = await User.findById(_id).select('local');

    if (!user) {
      throw new Error('Nguoi dung khong ton tai');
    }

    const user = await User.findOneAndUpdate(_id, { $set: data });

    return user;
  } catch (err) {
    throw err;
  }
};
