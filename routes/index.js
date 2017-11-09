var express = require('express'),
    router = express.Router();

// carrega o ficheiro index (angular trata das routes)
router.get('/*', function(req, res) {
    res.sendFile('../public/index.html');
    //res.render('index');
});

module.exports = router;
