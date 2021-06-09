const express = require('express');
const data = require('../data.json');
var router = express.Router();

// get route for home page
router.get('/', (req, res, next) => {
    const projects = data.projects;
    res.render('index', {projects}); 
});

// get route for about page
router.get('/about', (req, res, next) => {
    res.render('about');
});

// get route for projects
router.get('/projects/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const project = data.projects.find(project => project.id === id);
    if (!project) {
        const err = new Error('Project not found');
        err.status = 500;
        next(err);
    } else {
        res.render('project', {project});
    }
});

module.exports = router;