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
  },
  {
    timestamps: true,
  }
);

module.exports.Conversation = model('conversation', ConversationSchema);
