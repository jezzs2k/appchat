const { compare, hash, genSalt } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const { User } = require('../schema/User');
const defaultValue = require('../config/default');
const JWT_SECRET = defaultValue.JWT_SECRET;

module.exports.login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ 'local.email': email });

    if (!user) {
      throw new Error("User havenn't been exists?");
    }

    const match = await compare(password, user.local.password);

    if (!match) {
      throw new Error('Password is not match');
    }

    const payload = { user: { id: user._id } };

    const token = await sign(payload, JWT_SECRET, {
      expiresIn: 60 * 60 * 1000,
    });

    return token;
  } catch (err) {
    throw err;
  }
};

module.exports.register = async ({ name, email, password }) => {
  try {
    const user = await User.findOne({ 'local.email': email }).select(
      'local.email'
    );

    if (user) {
      throw new Error('User have been exists?');
    }

    const newUser = new User({
      name,
      local: {
        email,
        password,
      },
    });
    const salt = await genSalt(10);

    newUser.local['password'] = await hash(password, salt);

    await newUser.save();

    const payload = { user: { id: newUser._id } };

    const token = await sign(payload, JWT_SECRET, {
      expiresIn: 60 * 60 * 1000,
    });

    return token;
  } catch (err) {
    throw err;
  }
};
