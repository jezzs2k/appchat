const { Schema, model } = require('mongoose');

const MessengerSchema = new Schema(
  {
    sender: {
      name: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: true,
      },
    },
    receiver: {
      name: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: true,
      },
    },
    text: {
      type: String,
      require: true,
    },
    conversationId: {
      type: Schema.Types.ObjectId,
      ref: 'conversation',
    },
    isRead: {
      type: Boolean,
      require: true,
    },
    createAt: Number,
  },
  {
    timestamps: true,
  }
);

module.exports.Messenger = model('messenger', MessengerSchema);
