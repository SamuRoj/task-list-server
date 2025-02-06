const express = require('express');
const { getTasks, setTasks } = require('./config.js');

const taskList = getTasks();
const router = express.Router();

// Post Request

router.post('/tasks', (req, res) => {
    const { isCompleted, description } = req.body;
    const task = {id : taskList.length + 1, isCompleted: JSON.parse(isCompleted), description: description};
    taskList.push(task);
    setTasks(taskList);
    res.send("Task added successfully.");
});

// PUT Request

router.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { isCompleted, description } = req.body;
    taskList.filter(task => {
        if (task.id === id) {
            task.isCompleted = JSON.parse(isCompleted);
            task.description = description; 
        }
    });
    setTasks(taskList);
    res.send("Task modified successfully.");
})

// DELETE Request

router.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const taskIndex = taskList.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        taskList.splice(taskIndex, 1);
        setTasks(taskList);
        res.send("Task deleted successfully");
    } else {
        res.send("Task not found");
    }
});

module.exports = router;
