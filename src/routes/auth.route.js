const express = require('express');

const router = express.Router();
const { login, register } = require('../controllers/auth.controller');
const { LOGIN, CREATE_USER } = require('../validators/types');
const { validate } = require('../validators/User');

router.post('/login', validate(LOGIN), login);
router.post('/register', validate(CREATE_USER), register);

module.exports = router;
