const express = require('express');
const router = express.Router();

const loginController = require('./UsersController');

router.get('/api/auth/getUser',  loginController.getUser)

router.get('/api/auth/loginUser', loginController.loginUser)

router.post('/api/auth/registerUser', loginController.registerUser)

module.exports = router;