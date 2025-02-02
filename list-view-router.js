const express = require('express');
const { getTasks } = require('./config.js');

const taskList = getTasks();
const router = express.Router();

router.get('/tasks', (req, res) => {
    const { status } = req.query;

    if (status !== undefined) {
        const filterStatus = status === 'true'; 
        const filteredTasks = taskList.filter(task => task.isCompleted === filterStatus);
        return res.json(filteredTasks);
    }

    res.json(taskList);
});

router.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(taskList.filter(task => task.id === id));
})

module.exports = router;
