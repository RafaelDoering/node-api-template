const todoService = require('../services/todo.service');

const todoController = {
  create: async (req, res) => {
    const text = req.body.text;

    const createdTodo = await todoService.create(text, false);

    return res.status(200).json(createdTodo);
  },

  findById: async (req, res) => {
    const id = req.params.id;

    const todo = await todoService.findById(id);

    return res.status(200).json(todo);
  },

  find: async (req, res) => {
    const todos = await todoService.find();

    return res.status(200).json(todos);
  },

  updateById: async (req, res) => {
    const id = req.params.id;
    const text = req.body.text;
    const isDone = req.body.isDone;

    const updatedTodo = await todoService.updateById(id, text, isDone);

    return res.status(200).json(updatedTodo);
  },

  deleteById: async (req, res) => {
    const id = req.params.id;

    const deletedTodo = await todoService.deleteById(id);

    return res.status(200).json(deletedTodo);
  },
};

module.exports = todoController;
