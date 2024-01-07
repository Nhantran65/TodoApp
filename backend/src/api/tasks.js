const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([{
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
  }]);
});

module.exports = router;