const {
  createFriendRequest,
  deleteFriend,
  acceptFriendRequest,
  getFriendRequest,
  getFriend,
} = require('../models/Contact.model');

const { success, error, create } = require('../utils/response');

//@ router   POST /api/contacts
//@ des      make friend
//@ access   private
module.exports.makeFriend = async (req, res) => {
  try {
    const userId = req.user.id;
    const contactId = req.body.contactId;

    const newContact = await createFriendRequest({ userId, contactId });

    return create('SEND REQUEST FRIEND', { newContact }, true);
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
  }
};

//@ router   DELETE /api/contacts
//@ des      delete make friend and require friend
//@ access   private
module.exports.deleteFriendRequest = async (req, res) => {
  try {
    const userId = req.user.id;
    const contactId = req.params.id;

    await deleteFriend({ userId, contactId });

    return success('DELETE REQUEST FRIEND', null, true);
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
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
    };

    const friend = await acceptFriendRequest(userId, contact);

    return success('ACCEPT FRIEND COMPLETE', { friend }, true);
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
  }
};

//@ router   GET /api/contacts/profile/friends
//@ des      get my friends
//@ access   private
module.exports.getFriends = async (req, res) => {
  try {
    const userId = req.user.id;
    const friends = await getFriend(userId);

    return success(res, 'GET FRIENDS', { friends }, true);
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
  }
};

//@ router   GET /api/contacts/friends/private
//@ des      get friend require
//@ access   private
module.exports.getFriendRequest = async (req, res) => {
  try {
    const userId = req.user.id;
    const friends = await getFriendRequest(userId);

    return success(res, 'GET NO FRIENDS', { friends }, true);
  } catch (err) {
    console.error(err.message);
    error(res, 'internal server error', null, false);
  }
};
