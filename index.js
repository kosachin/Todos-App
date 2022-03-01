const express = require("express");
const app = express();
const port = process.env.PORT || 2020;
const mongoose = require("mongoose");

app.use(express.json());
const todosRoutes = require("./Routes/todosRoutes");

app.use("/todos", todosRoutes);

mongoose
  .connect(
    "mongodb+srv://sachinTodos:sachinTodos@cluster0.hwvyp.mongodb.net/todolist"
  )
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("Server is listening on port", port);
});
