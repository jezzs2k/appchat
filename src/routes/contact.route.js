const express = require('express');

const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

const {
  makeFriend,
  deleteMakeFriend,
  getFriends,
  acceptFriend,
  getNoFriend,
} = require('../controllers/contact.controller');

router.post('/', authMiddleware, makeFriend);
router.delete('/:id', authMiddleware, deleteMakeFriend);
router.put('/friend', authMiddleware, acceptFriend);
router.get('/profile/friends', authMiddleware, getFriends);
router.get('/friends/require', authMiddleware, getNoFriend);

module.exports = router;
