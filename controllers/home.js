var express = require('express');
var router = express.Router();

router.get('/home', function(req, res) {
    res.render('home');
});

module.exports = router;
