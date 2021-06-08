const express = require('express');
const data = require('./data.json');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res, next) => {
    const projects = data.projects;
    res.render('index', {projects}); 
});

app.get('/about', (req, res, next) => {
    res.render('about');
});

app.get('/projects/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const project = data.projects.find(project => project.id === id);
    res.render('project', {project});
});

app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

app.use( (err, req, res, next) =>{  
    // render the error page
    res.status(err.status);
    console.log(err);
    res.send(err);
  });

app.listen(3000, () => {
    console.log("App is running at localhost:3000")
});