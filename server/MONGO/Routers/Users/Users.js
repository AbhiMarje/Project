const express = require('express');
const router = express.Router();

const loginController = require('./UsersController');

router.get('/api/auth/getUser',  loginController.getUser)

router.get('/api/loginUser', loginController.loginUser)

router.post('/api/registerUser', loginController.registerUser)

module.exports = router;