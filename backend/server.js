const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FILE_PATH = './tasks.json';

// Read tasks
app.get('/tasks', (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(FILE_PATH));
  res.json(tasks);
});

// Add task
app.post('/tasks', (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(FILE_PATH));
  const newTask = { id: Date.now(), title: req.body.title, completed: false };
  tasks.push(newTask);
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks));
  res.status(201).json(newTask);
});

// Toggle complete
app.put('/tasks/:id', (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(FILE_PATH));
  const updatedTasks = tasks.map(task =>
    task.id === +req.params.id ? { ...task, completed: !task.completed } : task
  );
  fs.writeFileSync(FILE_PATH, JSON.stringify(updatedTasks));
  res.json({ success: true });
});

// Delete task
app.delete('/tasks/:id', (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(FILE_PATH));
  const filtered = tasks.filter(task => task.id !== +req.params.id);
  fs.writeFileSync(FILE_PATH, JSON.stringify(filtered));
  res.json({ success: true });
});

app.listen(5000, () => console.log('Server running on port 5000'));

