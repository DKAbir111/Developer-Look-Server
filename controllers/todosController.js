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

    if (email !== req.decoded.user.email) {
        return res.status(403).send({ message: 'forbidden access' })
    }
    try {
        const todos = await Todos.find({ email });
        res.send(todos);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//need to check the valid user for update the task
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const updatedTodo = await Todos.findByIdAndUpdate(id, { status });
        res.send(updatedTodo);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// need to check the valid user for delete the task
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTodo = await Todos.findByIdAndDelete(id);
        res.send(deletedTodo);
    } catch (error) {
        res.status(400).send(error.message);
    }

}

module.exports = { createTodos, findTodos, updateTodo, deleteTodo };