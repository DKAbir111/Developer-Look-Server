const createUser = require('../controllers/userController')
const { authUser, logOut } = require('../controllers/authController')
const express = require('express');
const router = express.Router();

router.post('/users', createUser)
router.post('/jwt', authUser)
router.post('/logout', logOut)

module.exports = router;