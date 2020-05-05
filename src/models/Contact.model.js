const { Contact } = require('../schema/Contact');
const { User } = require('../schema/User');
const { createConversation } = require('./Conversation.model');

module.exports.createFriendRequest = async ({ userId, contactId }) => {
  try {
    const newContact = new Contact({ userId, contactId });

    await newContact.save();

    return newContact;
  } catch (err) {
    throw err;
  }
};

module.exports.acceptFriendRequest = async (currentUserId, contactUser) => {
  try {
    const contactStore = await Contact.findOne({
      contactId: currentUserId,
      userId: contactUser._id,
      isFriend: false,
    });

    if (!contactStore) {
      throw new Error("You don't have friend request now ?");
    }

    const newFriend = await Contact.findOneAndUpdate(
      { userId: contactUser._id },
      {
        $set: {
          isFriend: true,
        },
        new: true,
      }
    );

    await createConversation({
      senderId: contactUser._id,
      receiverId: currentUserId,
    });

    return newFriend;
  } catch (err) {
    throw err;
  }
};

module.exports.deleteFriend = async ({ userId, contactId }) => {
  try {
    const contact = await Contact.findOne({
      $or: [
        { contactId, userId },
        { userId: contactId, contactId: userId },
      ],
    });

    if (!contact) {
      throw new Error("Don't have contact ?");
    }

    const deleteFriend = await Contact.findByIdAndRemove(contact._id);

    return deleteFriend;
  } catch (err) {
    throw err;
  }
};

module.exports.getFriend = async (userId) => {
  try {
    const friendsActive = await Contact.find({
      $or: [
        { userId, isFriend: true },
        { contactId: userId, isFriend: true },
      ],
    });
    if (!friendsActive) {
      return [];
    }

    return friendsActive;
  } catch (err) {
    throw err;
  }
};

module.exports.getFriendRequest = async (userId) => {
  try {
    const friendsNoActive = await Contact.find({
      contactId: userId,
      isFriend: false,
    });
    if (!friendsNoActive) {
      return [];
    }

    return friendsNoActive;
  } catch (err) {
    throw err;
  }
};

module.exports.getRequireFriend = async (userId) => {
  try {
    const friendsNoAccept = await Contact.find({ userId, isFriend: false });
    if (!friendsNoAccept) {
      return [];
    }

    return friendsNoAccept;
  } catch (err) {
    throw err;
  }
};
