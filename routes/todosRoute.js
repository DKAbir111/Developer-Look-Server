const express = require('express')
const router = express.Router()
const { createTodos, findTodos, updateTodo, deleteTodo } = require('../controllers/todosController.js')

router.post('/todos', createTodos)
router.get('/todos', findTodos)
router.put('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)

module.exports = router;