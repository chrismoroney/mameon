var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.sendFile('stories.html', { root: 'views/.html/' });
});

module.exports = router;