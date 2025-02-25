const Todos = require('../models/todosModel')

const createTodos = async (req, res) => {

    try {
        const { title, description, dueDate, status, priority, email } = req.body;
        const newTodo = new Todos({ title, description, dueDate, status, priority, email });
        const result = await newTodo.save()
        res.send(result);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const findTodos = async (req, res) => {
    const { email } = req.query;
    try {
        const todos = await Todos.find({ email });
        res.send(todos);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = { createTodos, findTodos };