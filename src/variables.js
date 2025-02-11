// variables.js

let taskList = [
    {
        id: 1,
        isCompleted: false,
        description: "Walk the dog"
    },
    {
        id: 2,
        isCompleted: true,
        description: "Do the homework"
    },
    {
        id: 3,
        isCompleted: false,
        description: "Buy some milk"
    }
]

let users = [
    {
        name: "admin",
        email: "admin@example.com"
    },
    {
        name: "user",
        email: "user@example.com"
    }
]

const getTasks = () => taskList;

const setTasks = (newTaskList) => {
    taskList = newTaskList;
}

const getUsers = () => users;

module.exports = { getTasks, setTasks, getUsers };