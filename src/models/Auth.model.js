const { User } = require('../schema/User');
const { compare, hash, genSalt } = require('bcrypt');
const { sign } = require('jsonwebtoken');

module.exports.login = ({ email, password }) => {
  try {
    const user = await User.findOne({ 'local.email': email });

    if (!user) {
      throw new Error('User havenn\'t been exists?');
      }
    
      const match = await compare(password, user.local.password);

      if (!match) {
          throw new Error('Password is not match');
      }

      const payload = {
          user: {
              id: user._id
          }
      }

      const token = sign(payload, 'hieu', {
          expiresIn: 60 * 60 * 1000
      });

      return token;

  } catch (err) {
    throw err;
  }
};

module.exports.register = async ({ name, email, password }) => {
  try {
    const user = await User.findOne({ 'local.email': email }).populate('local');

    if (user) {
      throw new Error('User have been exists?');
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    const salt = genSalt(10);

    newUser.password = await hash(password, salt);

    await newUser.save();

    const payload = {
        user: {
          id: newUser._id
        }
    }
      
    const token = sign(payload, 'hieu', {
        expiresIn: 60 * 60 * 1000
    });

    return token;
  } catch (err) {
    throw err;
  }
};
