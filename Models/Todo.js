const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    status: Boolean,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Todo", TodosSchema);
