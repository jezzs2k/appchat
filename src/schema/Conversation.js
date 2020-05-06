const { Schema, model } = require('mongoose');

const ConversationSchema = new Schema(
  {
    lastMess: {
      type: String,
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.Conversation = model('conversation', ConversationSchema);
