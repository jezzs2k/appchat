const express = require('express');

const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const {
  getConversations,
  getLatestConversation,
} = require('../controllers/conversation.controller');

router.get('/', authMiddleware, getConversations);
router.get('/latest', authMiddleware, getLatestConversation);

module.exports = router;
