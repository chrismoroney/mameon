var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile('contact.html', { root: 'views/.html/' });
});

module.exports = router;