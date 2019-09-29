const mongoose = require('mongoose');
const validator = require('validator');

const todoSchema = new mongoose.Schema({
  todo_name: {
    type: String,
    required: [true, 'Name is requires'],
    unique: true
  },
  todo_priority: {
    type: String,
    required: [true, 'Please enter a priority is required'],
    enum: ['High', 'Medium', 'Low'],
    default: 'Low'
  },
  todo_description: {
    type: String
  },
  todo_date: {
    type: Date,
    required: [true, 'Date of todo required']
  },
  todo_time: {
    type: Date,
    required: [true, 'Time to execute task is required']
  },
  user_id: [
    {
      type: mongoose.Schema.ObjectId,
      required: [true, 'User id is required'],
      ref: 'User'
    }
  ],
  date_created: {
    type: Date,
    required: [true, 'Date is neccessary'],
    default: Date.now()
  },
  is_active: {
    type: Boolean,
    default: true,
    select: false
  }
});

// todoSchema.pre('save', function(next) {});

const todoList = mongoose.model('todos', todoSchema);

module.exports = todoList;
