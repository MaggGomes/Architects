var express = require('express'),
    router = express.Router(),
    nodemailer = require('nodemailer'),
    project = require('../models/project'),
    config = require('../config/config');

/* GET projects listing. */
router.get('/projects/', function(req, res, next) {
    project.getAll(function(err, projects){
        if(err) { res.status(400).send(err); }
        else { res.status(200).send(projects); }
    });
});

/* GET project given id. */
router.get('/projects/:projectId', function(req, res, next) {
    var language = 'pt';
    if(req.query.language) language = req.query.language;
    project.getById(req.params.projectId, language, function(err, project){
        if(err) { res.status(400).send(err); }
        else { res.status(200).send(project); }
    });
});

module.exports = router;
