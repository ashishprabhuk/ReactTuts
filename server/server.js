const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

const items = [
  {
    id: 1,
    checked: false,
    task: "Task 1",
  },
  {
    id: 2,
    checked: false,
    task: "Task 2",
  },
  {
    id: 3,
    checked: false,
    task: "Task 3",
  },
  {
    id: 4,
    checked: false,
    task: "Ashish",
  },
];

// Get all items
app.get("/items", (req, res) => {
  res.json(items);
});

// Get a specific task by ID
app.get("/items/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = items.find((task) => task.id === taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// Create a new task
app.post("/items", (req, res) => {
  const newTask = req.body;
  items.push(newTask);
  res.status(201).json(newTask);
});

// Update a task by ID
app.put("/items/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;

  items.forEach((task, index) => {
    if (task.id === taskId) {
      items[index] = updatedTask;
    }
  });

  res.json(updatedTask);
});

// Delete a task by ID
app.delete("/items/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const deletedTaskIndex = items.findIndex((task) => task.id === taskId);

  if (deletedTaskIndex !== -1) {
    const deletedTask = items.splice(deletedTaskIndex, 1);
    res.json(deletedTask[0]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
