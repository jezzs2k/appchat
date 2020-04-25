const {
  createContact,
  deleteContact,
  acceptContact,
  getFriendActive,
  getFriendNoActive,
} = require('../models/Contact.model');

//@ router   POST /api/contacts
//@ des      make friend
//@ access   private
module.exports.makeFriend = async (req, res) => {
  try {
    const userId = req.user.id;
    const contactId = req.body.contactId;

    const newContact = await createContact({ userId, contactId });

    return res.status(200).json(newContact);
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};

//@ router   DELETE /api/contacts
//@ des      delete make friend and require friend
//@ access   private
module.exports.deleteMakeFriend = async (req, res) => {
  try {
    const userId = req.user.id;
    const contactId = req.params.id;

    const deleteMakeFriend = await deleteContact({ userId, contactId });

    return res.status(200).json(deleteMakeFriend);
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};

//@ router   PUT /api/contacts/friend
//@ des      accept friend
//@ access   private
module.exports.acceptFriend = async (req, res) => {
  try {
    const userId = req.user.id;

    const contact = {
      _id: req.body.contactId,
      name: req.body.name,
      avatar: req.body.avatar,
    };

    const friend = await acceptContact(userId, contact);

    return res.status(200).json(friend);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server error');
  }
};

//@ router   GET /api/contacts/profile/friends
//@ des      get my friends
//@ access   private
module.exports.getFriends = async (req, res) => {
  try {
    const userId = req.user.id;
    const friends = await getFriendActive(userId);

    return res.status(200).json(friends);
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};

//@ router   GET /api/contacts/friends/private
//@ des      get friend require
//@ access   private
module.exports.getNoFriend = async (req, res) => {
  try {
    const userId = req.user.id;
    const friends = await getFriendNoActive(userId);

    return res.status(200).json(friends);
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};
