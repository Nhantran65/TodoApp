const express = require('express');

const tasks = require('./tasks');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/tasks', tasks);

module.exports = router;
