const express = require('express')
const router = express.Router()
const { createTodos, findTodos } = require('../controllers/todosController.js')

router.post('/todos', createTodos)
router.get('/todos', findTodos)

module.exports = router;