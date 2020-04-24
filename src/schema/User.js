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
      default: 'avatar-default',
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
    createAt: {
      type: Number,
    },
    updateAt: {
      type: Number,
    },
    deleteAt: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.User = model('user', UserSchema);
