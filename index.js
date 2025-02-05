const express = require('express');

const app = express();
const viewRouter = require('./list-view-router.js');
const editRouter = require('./list-edit-router.js');
const { getTasks } = require('./config.js');

const PORT = 23727;

app.use('/', viewRouter);
app.use('/', editRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});