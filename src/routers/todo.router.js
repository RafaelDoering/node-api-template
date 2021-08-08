const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const todoController = require('../controllers/todo.controller');

router.post('/', authController.authenticate, todoController.create);

router.get('/:id', authController.authenticate, todoController.findById);

router.get('/', authController.authenticate, todoController.find);

router.put('/:id', authController.authenticate, todoController.updateById);

router.delete('/:id', authController.authenticate, todoController.deleteById);

module.exports = router;
