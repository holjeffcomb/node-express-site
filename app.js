const express = require('express');
const data = require('./data.json');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.use('/', (req, res, next) => {
    res.send('INDEX'); 
});

app.use('/about', (req, res, next) => {
    res.send('ABOUT');
});

app.use('/projects/:id', (req, res, next) => {

});

app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    res.send('<h1>Page Not Found</h1>');
})

app.listen(3000, () => {
    console.log("App is running at localhost:3000")
});