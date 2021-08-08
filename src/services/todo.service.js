const Todo = require('../models/todo.model');

const todoService = {
  create: async (text, isDone) => {
    return Todo.create({
      text,
      isDone,
    });
  },

  findById: async (id) => {
    return Todo.findById(id).exec();
  },

  find: async () => {
    return Todo.find({});
  },

  updateById: async (id, text, isDone) => {
    return Todo.findByIdAndUpdate(id, {text, isDone});
  },

  deleteById: async (id) => {
    return Todo.findByIdAndDelete(id);
  },
};

module.exports = todoService;
