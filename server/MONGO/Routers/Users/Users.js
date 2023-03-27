const express = require('express');
const router = express.Router();

const usersController = require('./UsersController');

router.get('/api/auth/getUser',  usersController.getUser)

router.get('/api/loginUser', usersController.loginUser)

router.post('/api/registerUser', usersController.registerUser)

module.exports = router;