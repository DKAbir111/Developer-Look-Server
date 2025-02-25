const mongoose = require('mongoose');
const Todos = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: String,
    status: String,
    priority: String
});

module.exports = Todos;