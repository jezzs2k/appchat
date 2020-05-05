const express = require('express');

const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

const {
  makeFriend,
  deleteFriendRequest,
  getFriends,
  acceptFriend,
  getFriendRequest,
} = require('../controllers/contact.controller');

router.post('/', authMiddleware, makeFriend);
router.delete('/:id', authMiddleware, deleteFriendRequest);
router.put('/friend', authMiddleware, acceptFriend);
router.get('/profile/friends', authMiddleware, getFriends);
router.get('/friends/require', authMiddleware, getFriendRequest);

module.exports = router;
