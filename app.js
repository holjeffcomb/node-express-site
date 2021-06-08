// initialize express and pug
const express = require('express');
const app = express();
app.set('view engine', 'pug');

// set up routing for get requests
const routes = require('./routes/index');
app.use('/', routes);

// set up static routing
app.use('/static', express.static('public'));

// 404 error, page not found
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

// global error handler
app.use( (err, req, res, next) =>{  
    if(!err.status) err.status = 500;
    if(!err.message) err.message = 'An unknown error has been detected';
    console.log(`Error status: ${err.status}`);
    console.log(`Error message: ${err.message}`);
    console.log(`Stack trace: ${err.stack}`);
    if (err.status === 404) {
        res.render('page-not-found', {err});
    } else {
        res.render('error', {err});
    }
  });

app.listen(3000, () => {
    console.log("App is running at localhost:3000")
});