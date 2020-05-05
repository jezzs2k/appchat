const { Schema, model } = require('mongoose');

const MessengerSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    text: {
      type: String,
      require: true,
    },
    conversation: {
      type: Schema.Types.ObjectId,
      ref: 'conversation',
    },
    isRead: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.Messenger = model('messenger', MessengerSchema);
