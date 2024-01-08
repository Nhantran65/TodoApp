const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  tasks: [
    {
      _id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      done: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
});

const List = mongoose.model("List", ListSchema);

module.exports = { List };
