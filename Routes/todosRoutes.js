const router = require("express").Router();
const e = require("express");
const Todo = require("../Models/Todo.js");
router.get("/", (req, res) => {
  Todo.find((err, result) => {
    if (err) return err;
    return res.json(result);
  });
});

router.post("/", (req, res) => {
  Todo.create(req.body, (err, result) => {
    if (err) return err;
    return res.json(result);
  });
});

router.delete("/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id, (err, result) => {
    if (err) return err;
    return res.end();
  });
});

router.put("/:id", (req, res) => {
  Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, result) => {
      if (err) return err;
      return res.json(result);
    }
  );
});

module.exports = router;
