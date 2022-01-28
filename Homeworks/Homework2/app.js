const Edit = require("./edit");
const editTasks = new Edit("./tasks.json");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/get/:id", (req, res) => {
  const { id } = req.params;
  res.send(editTasks.get(id));
});

app.put("/add", (req, res) => {
  const { title, status } = req.body;
  res.json(editTasks.add(title, status));
});

app.delete("/remove/:id", (req, res) => {
  const { id } = req.params;
  res.json(editTasks.remove(id));
});

app.listen(4444, () => console.log("Server listen port 4444"));
