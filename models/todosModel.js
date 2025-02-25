const mongoose = require('mongoose');
const TodosSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: String,
    status: String,
    priority: String,
    email: { type: String, required: true }
});

const Todos = mongoose.model('Todos', TodosSchema)
module.exports = Todos;