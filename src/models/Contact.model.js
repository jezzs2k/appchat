const { Contact } = require('../schema/Contact');
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

module.exports.acceptContact = async ({ userId, contactId }) => {
  try {
    const contact = await Contact.findOne({
      contactId: userId,
      userId: contactId,
      isFriend: false,
    });

    if (!contact) {
      throw new Error("You don't have require friend now ?");
    }

    findReceiver({ userId, contactId });

    const newFriend = await Contact.findByIdAndUpdate(contact._id, {
      $set: {
        isFriend: true,
      },
      new: true,
    });

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

    console.log(contact);
    //test

    const contact_1 = await Contact.findOne({
      contactId,
      userId,
    });

    const contact_2 = await Contact.findOne({
      userId: contactId,
      contactId: userId,
    });

    const deleteFriend = null;

    if (contact_1) {
      deleteFriend = await Contact.findByIdAndUpdate(contact_1._id, {
        $set: {
          isFriend: false,
          deleteAt: new Date().getTime(),
        },
        new: true,
      });
    } else if (contact_2) {
      deleteFriend = await Contact.findByIdAndUpdate(contact_2._id, {
        $set: {
          isFriend: false,
          deleteAt: new Date().getTime(),
        },
        new: true,
      });
    } else {
      throw new Error("Don't have contact ?");
    }

    return deleteContact;
  } catch (err) {
    throw err;
  }
};

module.exports.getFriendActive = async (userId) => {
  try {
    const friendsActive = await find({ userId, isFriend: true });
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
    const friendsNoActive = await find({ userId, isFriend: false });
    if (!friendsActive) {
      throw new Error("You don't have require friend!!");
    }

    return friendsNoActive;
  } catch (err) {
    throw err;
  }
};

module.exports.getRequireFriend = async (userId) => {
  try {
    const friendsNoAccept = await find({ userId, isFriend: false });
    if (!friendsNoAccept) {
      throw new Error('Require friend accept empty!!');
    }

    return friendsNoAccept;
  } catch (err) {
    throw err;
  }
};
