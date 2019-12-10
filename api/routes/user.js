const express = require('express');
const router = express.Router();

const userController = require('./../controller/user');

router.post('/signup', userController.signUp)
router.get('/login', userController.login)

module.exports = router;