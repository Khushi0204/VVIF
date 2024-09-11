const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

// Signup route
router.post('/signup', AuthController.signup);

module.exports = router;
