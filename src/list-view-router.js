// Imports
const express = require('express');
const { getTasks } = require('./variables.js');

// Variables
const taskList = getTasks();
const router = express.Router();

// GET Request and Middleware
const getMiddleware = (req, res, next) => {
    const { status } = req.query;
    if(status === undefined){
        next();
    }
    else if( typeof JSON.parse(status) !== 'boolean' ){ 
        res.status(400).json({message : "Bad request"});
    }
    else{
        next();
    }
}

router.get('/tasks', getMiddleware, (req, res) => {
    const { status } = req.query;

    if (status !== undefined) {
        const filterStatus = JSON.parse(status); 
        const filteredTasks = taskList.filter(task => task.isCompleted === filterStatus);
        return res.status(200).json(filteredTasks);
    }

    res.status(200).json(taskList);
});

// Get method with Id param and Middleware
const getIdMiddleware = (req, res, next) => {
    const id = parseInt(req.params.id);
    const task = taskList.filter(task => task.id === id);
    if(task.length === 0){
        res.status(404).json({ message:"Not found" });
    }
    else{
        next();
    }
}

router.get('/tasks/:id', getIdMiddleware, (req, res) => {
    const id = parseInt(req.params.id);
    res.status(200).json(taskList.filter(task => task.id === id)[0]);
})

module.exports = router;
