var express = require('express');
var router = express.Router();
var users = require('../models/users');


router.get('/login', function(req, res) {
    res.render('login');
});

router.post('/login/submit', function(req, res) {
    console.log(req.body.name + ' ' + req.body.password);
    var name = req.body.name;
    var password = req.body.password;
    users.getUser(name, function(user) {
        if(!user) {
            res.send('Invalid email or password.');
        }
        else if(user.password === password) {
            res.send({redirect: '/home'});
        }
        else {
            res.send('Invalid email or password.');
        }
    });
});

router.post('/login/createAccount', function(req, res) {
    console.log('post');
    var name = req.body.name;
    var password = req.body.password;
    users.addUser(name, password);
    res.end();
});

module.exports = router;
