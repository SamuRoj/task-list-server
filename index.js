const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const viewRouter = require('./list-view-router.js');
const editRouter = require('./list-edit-router.js');

const PORT = 23727;

const appMiddleware = (req, res, next) => {
    console.log("Method: ", req.method);
    if(req.method !== 'GET' && req.method !== 'POST' && req.method !== 'PUT' && req.method !== 'DELETE'){
        res.status(405).json({message : "Method not allowed"});
    }
    else{
        next();
    }
};

app.use(appMiddleware);
app.use('/', viewRouter);
app.use('/', editRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
