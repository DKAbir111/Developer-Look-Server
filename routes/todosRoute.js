const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const { createTodos, findTodos, updateTodo, deleteTodo } = require('../controllers/todosController.js')

router.post('/todos', createTodos)
router.get('/todos', verifyToken, findTodos)
router.put('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)

module.exports = router;