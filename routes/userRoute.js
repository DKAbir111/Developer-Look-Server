const createUser = require('../controllers/userController')
const authUser = require('../controllers/authController')
const express = require('express');
const router = express.Router();

router.post('/users', createUser)
router.post('/jwt', authUser)

module.exports = router;