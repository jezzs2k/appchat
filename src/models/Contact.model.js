const { Contact } = require('../schema/Contact');
const { User } = require('../schema/User');
const { findReceiver } = require('./Conversation.model');

module.exports.createContact = async ({ userId, contactId }) => {
  try {
    const newContact = new Contact({ userId, contactId });

    await newContact.save();

    return newContact;
  } catch (err) {
    throw err;
  }
};

module.exports.acceptContact = async (userId, contact) => {
  try {
    const user = await User.findOne({
      _id: userId,
    }).select('_id name avatar');

    const contactStore = await Contact.findOne({
      contactId: userId,
      userId: contact._id,
      isFriend: false,
    });

    if (!contactStore) {
      throw new Error("You don't have require friend now ?");
    }

    const newFriend = await Contact.findOneAndUpdate(
      { userId: contact._id },
      {
        $set: {
          isFriend: true,
        },
        new: true,
      }
    );

    await findReceiver(user, contact);

    return newFriend;
  } catch (err) {
    throw err;
  }
};

module.exports.deleteContact = async ({ userId, contactId }) => {
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
    const deleteFriend = await Contact.findByIdAndDelete(contact._id);

    return deleteFriend;
  } catch (err) {
    throw err;
  }
};

module.exports.getFriendActive = async (userId) => {
  try {
    const friendsActive = await Contact.find({
      $or: [
        { userId, isFriend: true },
        { contactId: userId, isFriend: true },
      ],
    });
    if (!friendsActive) {
      throw new Error("You don't have friend!!");
    }

    return friendsActive;
  } catch (err) {
    throw err;
  }
};

module.exports.getFriendNoActive = async (userId) => {
  try {
    const friendsNoActive = await Contact.find({
      contactId: userId,
      isFriend: false,
    });
    if (!friendsNoActive) {
      throw new Error("You don't have require friend!!");
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
      throw new Error('Require friend accept empty!!');
    }

    return friendsNoAccept;
  } catch (err) {
    throw err;
  }
};
