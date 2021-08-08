const mongoose = require('mongoose');
const {Schema} = mongoose;

const todoSchema = new Schema({
  text: String,
  isDone: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
