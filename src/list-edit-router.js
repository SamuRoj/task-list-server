// Imports
const express = require('express');
const { getTasks, setTasks } = require('./variables.js');

// Variables
const taskList = getTasks();
const router = express.Router();

// POST Request and Middleware
const postMiddleware = (req, res, next) => {
    if(req.body == undefined){
        res.status(400).json({message : "Bad request"})
    } 
    else{
        const { isCompleted, description } = req.body;

        if(isCompleted == undefined || description == undefined){
            res.status(400).json({message : "Bad request"})
        }
        else if(typeof JSON.parse(isCompleted) !== 'boolean' || typeof description !== 'string'){
            res.status(400).json({message : "Bad request"})
        }
        else {
            next();
        }
    }
};

router.post('/tasks', postMiddleware, (req, res) => {
    const { isCompleted, description } = req.body;
    const task = {id : taskList.length + 1, isCompleted: JSON.parse(isCompleted), description: description};
    taskList.push(task);
    setTasks(taskList);
    res.status(201).send("Task added successfully.");
});

// PUT Request and Middleware
const putMiddleware = (req, res, next) => {
    if(req.body == undefined){
        res.status(400).json({message : "Bad request"})
    }
    else{
        const id = parseInt(req.params.id);	
        const { isCompleted, description } = req.body;

        if(id == undefined || isCompleted == undefined || description == undefined){
            res.status(400).json({message : "Bad request"})
        }
        else if(typeof id !== 'number' || typeof JSON.parse(isCompleted) !== 'boolean' || typeof description !== 'string'){
            res.status(400).json({message : "Bad request"})
        }
        else {
            const task = taskList.filter(task => (task.id === id));
            if(task.length === 0){
                res.status(404).json({message : "Not Found"})
            }
            else{
                next();
            }   
        }
    }
};

router.put('/tasks/:id', putMiddleware, (req, res) => {
    const id = parseInt(req.params.id);
    const { isCompleted, description } = req.body;
    taskList.filter(task => {
        if (task.id === id) {
            task.isCompleted = JSON.parse(isCompleted);
            task.description = description; 
        }
    });
    setTasks(taskList);
    res.status(200).send("Task modified successfully.");
});

// DELETE Request
router.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const taskIndex = taskList.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        taskList.splice(taskIndex, 1);
        setTasks(taskList);
        res.status(200).send("Task deleted successfully");
    } else {
        res.status(404).send({ message: "Not Found"});
    }
});

module.exports = router;
