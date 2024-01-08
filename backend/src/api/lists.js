const express = require("express");
const { List } = require("../models");

const router = express.Router();

router.get("/:_id", async (req, res) => {
  const { _id } = req.params;
  const list = await List.findById(_id);
  res.json({
    success: true,
    list,
  });
});

router.post("/", async (req, res) => {
  const { tasks } = req.body;
  const newList = new List({ tasks });
  await newList.save();
  res.json({
    success: true,
    _id: newList._id,
  });
});

router.put("/:_id", async (req, res) => {
  const { _id } = req.params;
  const { tasks } = req.body;

  await List.findOneAndUpdate({ _id }, { tasks });
  res.json({
    success: true,
  });
});

module.exports = router;
