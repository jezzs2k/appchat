const { User } = require('../schema/User');

module.exports.getAllUser = async () => {
  try {
    const users = await User.find({ isActive: true }).select('_id name avatar');

    return users;
  } catch (err) {
    throw err;
  }
};

module.exports.getUserById = async (id) => {
  try {
    const user = await User.findOne({ _id: id, isActive: true }).select(
      '_id name avatar'
    );
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
    const userStore = await User.findById(_id).select('local');
    if (!userStore) {
      throw new Error('Nguoi dung khong ton tai');
    }

    const user = await User.findByIdAndUpdate(
      _id,
      { $set: data },
      { new: true }
    ).select('_id name updatedAt avatar age phone');

    return user;
  } catch (err) {
    throw err;
  }
};

module.exports.deleteUser = async (_id) => {
  try {
    const userStore = await User.findById(_id).select('_id');

    if (!userStore) {
      throw new Error('Nguoi dung khong ton tai');
    }

    const user = await User.findByIdAndDelete(_id);

    return user;
  } catch (err) {
    throw err;
  }
};
