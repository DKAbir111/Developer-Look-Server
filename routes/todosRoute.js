const express = require('express')
const router = express.Router()
const { createTodos } = require('../controllers/todosController.js')

router.post('/todos', createTodos)

module.exports = router;