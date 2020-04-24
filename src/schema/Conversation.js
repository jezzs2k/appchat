const { Schema, model } = require('mongoose');

const ConversationSchema = new Schema(
  {
    lastMess: {
      type: String,
      required: true,
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
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
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
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
    createAt: Number,
  },
  {
    timestamps: true,
  }
);

module.exports.Conversation = model('conversation', ConversationSchema);
