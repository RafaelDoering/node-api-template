const express = require('express');
const router = express.Router();

const authRouter = require('./auth.router');
const todoRouter = require('./todo.router');

router.use('/auth', authRouter);
router.use('/todos', todoRouter);

module.exports = router;
