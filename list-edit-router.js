const express = require('express');
const { getTasks, setTasks } = require('./config.js');

const taskList = getTasks();
const router = express.Router();

router.post('/tasks', (req, res) => {
    const { id, isCompleted, description } = req.body;
    const task = {id : parseInt(id), isCompleted: isCompleted, description: description};
    taskList.push(task);
    setTasks(taskList);
    res.send("Task added successfully.");
});

router.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { isCompleted, description } = req.body;
    taskList.filter(task => {
        if (task.id === id) {
            task.isCompleted = isCompleted;
            task.description = description; 
        }
    });
    setTasks(taskList);
    res.send("Task modified successfully.");
})

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
