var express = require('express');
var router = express.Router();

router.get('/home', function(req, res) {
    if(req.session.username) {
        res.render('home', {username: req.session.username});
    }
    else {
        res.redirect('/login');
    }
});

module.exports = router;
