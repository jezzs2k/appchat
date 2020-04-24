const { Schema, model } = require('mongoose');

const ContactSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    contactId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    isFriend: {
      type: Boolean,
      default: false,
    },
    createAt: {
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

module.exports.Contact = model('contact', ContactSchema);
