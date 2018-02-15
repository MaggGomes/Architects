var express = require('express'),
    router = express.Router(),
    //nodemailer = require('nodemailer'),
    project = require('../models/project'),
	distinction = require('../models/distinction'),
	link = require('../models/link'),
	curriculum = require('../models/curriculum'),
	team = require('../models/team'),
    config = require('../config/config');

/* GET projects listing. */
router.get('/projects/', function(req, res, next) {
	var language = 'pt';
	if(req.query.language) language = req.query.language;
    project.getAll(language, function(err, projects){
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

/* GET team listing. */
router.get('/team/', function(req, res, next) {
	var language = 'pt';
	if(req.query.language) language = req.query.language;
	team.getAll(language, function(err, members){
		if(err) { res.status(400).send(err); }
		else { res.status(200).send(members); }
	});
});

/* GET curriculum listing. */
router.get('/curriculum/', function(req, res, next) {
	var language = 'pt';
	if(req.query.language) language = req.query.language;
	curriculum.getAll(language, function(err, curriculums){
		if(err) { res.status(400).send(err); }
		else { res.status(200).send(curriculums); }
	});
});

/* GET distinctions listing. */
router.get('/distinctions/', function(req, res, next) {
	var language = 'pt';
	if(req.query.language) language = req.query.language;
	distinction.getAll(language, function(err, distinctions){
		if(err) { res.status(400).send(err); }
		else { res.status(200).send(distinctions); }
	});
});

/* GET links listing. */
router.get('/links/', function(req, res, next) {
	var language = 'pt';
	if(req.query.language) language = req.query.language;
	link.getAll(language, function(err, links){
		if(err) { res.status(400).send(err); }
		else { res.status(200).send(links); }
	});
});

module.exports = router;
