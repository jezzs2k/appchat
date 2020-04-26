const { Schema, model } = require('mongoose');

const ConversationSchema = new Schema(
  {
    lastMess: {
      type: String,
      required: true,
    },
    sender: {
      _id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
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
      _id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
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
