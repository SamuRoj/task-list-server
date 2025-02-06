const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const viewRouter = require('./list-view-router.js');
const editRouter = require('./list-edit-router.js');

const PORT = 23727;

app.use('/', viewRouter);
app.use('/', editRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});