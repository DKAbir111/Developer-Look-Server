const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const { createTodos, findTodos, updateTodo, deleteTodo } = require('../controllers/todosController.js')

router.post('/todos', verifyToken, createTodos)
router.get('/todos', verifyToken, findTodos)
router.put('/todos/:id', verifyToken, updateTodo)
router.delete('/todos/:id', verifyToken, deleteTodo)

module.exports = router;