const {
  createContact,
  deleteContact,
  acceptContact,
  getFriendActive,
  getFriendNoActive,
} = require('../models/Contact.model');
const httpStatus = require('../config/httpStatus');

//@ router   POST /api/contacts
//@ des      make friend
//@ access   private
module.exports.makeFriend = async (req, res) => {
  try {
    const userId = req.user.id;
    const contactId = req.body.contactId;

    const newContact = await createContact({ userId, contactId });

    return res.status(httpStatus.CREATED).json({
      msg: 'SEND REQUEST FRIEND',
      data: { newContact },
      success: true,
    });
  } catch (err) {
    console.error(err.message);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: 'Internal server error',
      data: null,
      success: false,
    });
  }
};

//@ router   DELETE /api/contacts
//@ des      delete make friend and require friend
//@ access   private
module.exports.deleteMakeFriend = async (req, res) => {
  try {
    const userId = req.user.id;
    const contactId = req.params.id;

    await deleteContact({ userId, contactId });

    return res.status(httpStatus.ok).json({
      msg: 'DELETE REQUEST FRIEND',
      data: null,
      success: true,
    });
  } catch (err) {
    console.error(err.message);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: 'Internal server error',
      data: null,
      success: false,
    });
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

    return res.status(httpStatus.ok).json({
      msg: 'ACCEPT FRIEND COMPLETE',
      data: { friend },
      success: true,
    });
  } catch (err) {
    console.error(err.message);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: 'Internal server error',
      data: null,
      success: false,
    });
  }
};

//@ router   GET /api/contacts/profile/friends
//@ des      get my friends
//@ access   private
module.exports.getFriends = async (req, res) => {
  try {
    const userId = req.user.id;
    const friends = await getFriendActive(userId);

    return res.status(httpStatus.ok).json({
      msg: 'GET FRIENDS',
      data: { friends },
      success: true,
    });
  } catch (err) {
    console.error(err.message);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: 'Internal server error',
      data: null,
      success: false,
    });
  }
};

//@ router   GET /api/contacts/friends/private
//@ des      get friend require
//@ access   private
module.exports.getNoFriend = async (req, res) => {
  try {
    const userId = req.user.id;
    const friends = await getFriendNoActive(userId);

    return res.status(httpStatus.ok).json({
      msg: 'GET NO FRIENDS',
      data: { friends },
      success: true,
    });
  } catch (err) {
    console.error(err.message);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: 'Internal server error',
      data: null,
      success: false,
    });
  }
};
