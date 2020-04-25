const express = require('express');

const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

const {
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

router.get('/', authMiddleware, getAllUser);
router.get('/:id', authMiddleware, getUserById);
router.put('/', authMiddleware, updateUser);
router.delete('/', authMiddleware, deleteUser);

module.exports = router;
