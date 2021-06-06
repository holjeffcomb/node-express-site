const express = require('express');
const data = require('./data.json');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.use('/', (req, res, next) => {
    console.log(data);
    next();
});

app.use('/about', (req, res, next) => {

});

app.use('/projects/:id', (req, res, next) => {

});

app.listen(3000, () => {
    console.log("App is running at localhost:3000")
});