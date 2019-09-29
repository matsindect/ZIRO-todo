const todoList = require('../models/todoModel');
const APIresourceFunc = require('../utils/APIresourceFunc');
const catchAsyncFunc = require('../utils/catchAsyncFuncs');
const AppError = require('../utils/appError');

exports.createTask = catchAsyncFunc(async (req, res, next) => {
  const newTask = await todoList.create(req.body);
  res.status(201).send({
    status: 'success',
    data: {
      todo: newTask
    }
  });
});

exports.deactivateTask = catchAsyncFunc(async (req, res, next) => {
  await todoList.findByIdAndUpdate(req.todo.id, { is_active: false });

  res.status(204).json({
    status: 'success',
    data: null
  });
});
exports.getTasklist = catchAsyncFunc(async (req, res, next) => {
  //EXECUTE A QUERY
  const apiHelpers = new APIresourceFunc(todoList.find(), req.query)
    .AdvancedFilter()
    .sort()
    .fieldSort()
    .paginate();

  const tasks = await apiHelpers.query;

  res.status(200).send({
    status: 'Success',
    results: tasks.length,
    data: {
      tasks
    }
  });
});

exports.getTask = catchAsyncFunc(async (req, res, next) => {
  const todo = await todoList.findById(req.params.id);

  if (!todo) {
    return next(new AppError('There is no todo with that id', 404));
  }
  res.status(200).send({
    status: 'Success',
    data: {
      todo
    }
  });
});

exports.deleteTask = catchAsyncFunc(async (req, res, next) => {
  const todo = await todoList.findByIdAndDelete(req.params.id);

  if (!todo) {
    return next(new AppError('There is no todo with that id', 404));
  }
  res.status(204).send({
    status: 'Success',
    data: null
  });
});

exports.updateTask = catchAsyncFunc(async (req, res, next) => {
  const todo = await todoList.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!todo) {
    return next(new AppError('There is no Task with that id', 404));
  }
  // const user = await User.findOne({user_name: req.params.user_name});
  res.status(200).send({
    status: 'Success',
    data: {
      todo
    }
  });
});
