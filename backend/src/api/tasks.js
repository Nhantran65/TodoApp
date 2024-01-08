const express = require('express');
const TaskList = require('../models/taskList.js');

const router = express.Router();

// Default tasks
const defaultTasks = [
  {
    _id: 0,
    title: "Software Engineer",
    done: false,
  },
  {
    _id: 1,
    title: "Data Science",
    done: true,
  },
  {
    _id: 2,
    title: "Data Analysis",
    done: false,
  },
];

// POST /api/v1/tasks/list
router.post('/list', async (req, res) => {
  try {
    const { tasks } = req.body;
    const taskList = new TaskList({ tasks });
    await taskList.save();
    res.status(201).json({ id: taskList._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// GET /api/v1/tasks/list/:id
router.get('/list/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const taskList = await TaskList.findById(id);

    if (!taskList) {
      return res.status(404).json({ message: 'Task list not found' });
    }

    // Transform the tasks array to the desired format
    const formattedTasks = taskList.tasks.map(task => ({
      _id: task._id,
      title: task.title,
      done: task.done,
    }));

    res.json(formattedTasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET /api/v1/tasks/list
router.get('/list', async (req, res) => {
  try {
    // Load default tasks if no tasks are saved in the database
    const taskLists = await TaskList.find();
    if (taskLists.length === 0) {
      console.log('No task lists found. Creating default tasks...');
      await TaskList.create({ tasks: defaultTasks });
      res.json(defaultTasks);
    } else {
      console.log('Found existing task lists:', taskLists);
      res.json(taskLists);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// PUT /api/v1/tasks/list/:id
router.put('/list/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { tasks } = req.body;
    await TaskList.findByIdAndUpdate(id, { tasks });
    res.json({ message: 'Task list updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
