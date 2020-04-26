const express = require('express');

const router = express.Router();
const { SEND_MESS } = require('../validators/types');
const { validate } = require('../validators/Messenger');
const authMiddleware = require('../middleware/auth.middleware');
const { getMess, sendMess } = require('../controllers/messenger.controller');

router.get('/:id', authMiddleware, getMess);
router.post('/', authMiddleware, validate(SEND_MESS), sendMess);

module.exports = router;
