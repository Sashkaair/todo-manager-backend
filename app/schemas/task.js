const mongoose = require('mongoose');

let schema = mongoose.Schema({
  title: String,
  dueDate: Number,
  createdAt: Number,
  finishedAt: Number,
  updatedAt: Number,
  deletedAt: Number,
  priority: Number,
  order: Number,
  group: { type: mongoose.Schema.Types.Number, ref: 'group'},
  subtasks: Array,
  completed: Boolean
});

module.exports = schema;
