// config.js

let taskList = [
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

const getTasks = () => taskList;

const setTasks = (newTaskList) => {
    taskList = newTaskList;
}


module.exports = { getTasks, setTasks };