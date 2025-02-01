const express = require('express');

const app = express();

const PORT = 23727;

const taskList = [
    {
        id: 123456,
        isCompleted: false,
        description: "Walk the dog"
    },
    {
        id: 789012,
        isCompleted: true,
        description: "Do the homework"
    },
    {
        id: 184357,
        isCompleted: false,
        description: "Buy some milk"
    }
]

app.get('/tasks', (req, res) => {
    res.json(taskList);
});

app.listen(PORT);