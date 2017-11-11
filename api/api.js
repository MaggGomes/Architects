var express = require('express'),
    router = express.Router(),
    nodemailer = require('nodemailer'),
    project = require('../models/project'),
    config = require('../config');

/* GET projects listing. */
router.get('/projects/', function(req, res, next) {
    project.getAll(function(err, projects){
        if(err) { res.status(400).send(err); }
        else { res.status(200).send(projects); }
    });
});

/* GET project given id. */
router.get('/projects/:projectId', function(req, res, next) {
    project.getById(req.params.projectId, function(err, project){
        if(err) { res.status(400).send(err); }
        else { res.status(200).send(project); }
    });
});

/* POST send email with message. */
router.post('/contact', function(req, res, next) {
    // request params validation
    req.checkBody('name', 'NOME_VAZIO').notEmpty();
    req.checkBody('name', 'NOME_GRANDE').isLength({max: 50});
    req.checkBody('email', 'EMAIL_VAZIO').notEmpty();
    req.checkBody('email', 'EMAIL_MAU').isEmail();
    req.checkBody('subject', 'ASSUNTO_VAZIO').notEmpty();
    req.checkBody('subject', 'ASSUNTO_GRANDE').isLength({max: 70});
    req.checkBody('message', 'MENSAGEM_VAZIO').notEmpty();

    var errors = req.validationErrors();

    if(errors) {
        res.status(400).send({errors: errors});
    } else {
        // if request parameters are valid
        var transporter = nodemailer.createTransport({
            host: config.mail.host,
            port: config.mail.port,
            secure: config.mail.secure,
            auth: {
                user: config.mail.auth.user,
                pass: config.mail.auth.pass
            }
        });

        var mailOptions = {
            from: req.body.name + ' <' + req.body.email +'>',
            to: config.mail.auth.user,
            subject: req.body.subject,
            text: 'De: ' + req.body.name + ' <' + req.body.email + '>' + '\n\n' + req.body.message
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                res.status(400).send({errorMailSend: true});
            } else {
                console.log('Message sent: %s', info.messageId);
                res.status(200).send();
            }
        });
    }
});

module.exports = router;
