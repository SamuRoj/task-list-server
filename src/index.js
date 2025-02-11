// Imports
const express = require('express');
const jwt = require('jsonwebtoken');
const { getUsers } = require('./variables.js');
const viewRouter = require('./list-view-router.js');
const editRouter = require('./list-edit-router.js');
const { JWTValidation } = require('./auth.js');
require('dotenv').config();

// Variables
const app = express();
const users = getUsers();
const PORT = 23727;
const secret = process.env.SECRET; 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Functions
const appMiddleware = (req, res, next) => {
    if(req.method !== 'GET' && req.method !== 'POST' && req.method !== 'PUT' && req.method !== 'DELETE'){
        res.status(405).json({message : "Method not allowed"});
    }
    else{
        next();
    }
};

const middleware = [JWTValidation, appMiddleware]

// Login POST Request
app.post('/login', (req, res) => {
    const { email } = req.body; 
    const user = users.filter((user) => user.email === email);
    if(user.length == 0){
        res.status(401).send({ error: "Invalid email." });
    }
    const token = jwt.sign({
        email: user[0].email,
        name: user[0].name
    }, secret);
    res.json({ token });
})

// Using the middleware
app.use(middleware);
app.use('/', viewRouter);
app.use('/', editRouter);

// Server listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
