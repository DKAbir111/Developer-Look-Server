const Todos = require('../models/todosModel')

const createTodos = async (req, res) => {
    try {
        const { title, description, dueDate, status, priority } = req.body;
        const newTodo = new Todos({ title, description, dueDate, status, priority });
        const result = await newTodo.save()
        res.send(result);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = { createTodos };