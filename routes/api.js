var express = require('express'),
    router = express.Router(),
    project = require('../models/project');

/* GET projects listing. */
router.get('/projects/', function(req, res, next) {
    project.getAll(function(err, projects){
        if(err) { res.status(400).send(err); }
        else { res.status(200).send(projects); }
    });
});

/* GET project given id. */
router.get('/projects/:projectId', function(req, res, next) {
    project.getById(projectId, function(err, project){
        if(err) { res.status(400).send(err); }
        else { res.status(200).send(project); }
    });
});

/* estou a usar para testaar views TODO tirar daqui */
router.get('/test', function(req, res, next) {
    res.render('project');
});

module.exports = router;
