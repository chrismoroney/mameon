var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('aboutus.html', { root: 'views/.html/' });
});

module.exports = router;