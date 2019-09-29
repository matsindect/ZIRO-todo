const express = require('express');
const todoController = require('../controllers/todoController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(todoController.getTasklist)
  .post(todoController.createTask);

router
  .route('/:id')
  .get(todoController.getTask)
  .delete(todoController.deleteTask)
  .patch(todoController.updateTask);

module.exports = router;
