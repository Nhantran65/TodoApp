const express = require("express");

const tasks = require("./tasks");
const lists = require("./lists");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/tasks", tasks);
router.use("/task/list", lists);

module.exports = router;
