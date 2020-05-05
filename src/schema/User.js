const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    avatar: {
      type: String,
      default: 'https://picsum.photos/200/300',
    },
    age: {
      type: Number,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    local: {
      email: {
        type: String,
        require: true,
      },
      password: {
        type: String,
        require: true,
      },
    },
    google: {},
  },
  {
    timestamps: true,
  }
);

module.exports.User = model('user', UserSchema);
