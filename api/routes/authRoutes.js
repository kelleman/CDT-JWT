
const express = require('express');
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected endpoints
router.get('/protected/get', authenticateToken, authController.getProtectedData);
router.post('/protected/post', authenticateToken, authController.postProtectedData);

module.exports = router;
