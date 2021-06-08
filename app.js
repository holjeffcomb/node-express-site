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

// render the error page
app.use( (err, req, res, next) =>{  
    res.status(err.status);
    res.send(err);
  });

app.listen(3000, () => {
    console.log("App is running at localhost:3000")
});