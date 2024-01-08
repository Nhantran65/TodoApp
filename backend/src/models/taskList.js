const mongoose = require('mongoose');

const taskListSchema = new mongoose.Schema({
  tasks: [
    {
      _id: Number,
      title: String,
      done: Boolean,
    },
  ],
});

const TaskList = mongoose.model('TaskList', taskListSchema);

module.exports = TaskList;
