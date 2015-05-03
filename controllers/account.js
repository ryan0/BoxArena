var express = require('express');
var router = express.Router();
var users = require('../models/users');


router.post('/login', function(req, res) {
    var name = req.body.username;
    var password = req.body.password;
	users.getUser(name, function(user) {
	    if(!user) res.end('user does not exist');
        else if(user.password != password) res.end('wrong password');
        else if(user.password == password) res.end('login succesful');
        else res.end('error logging in');
    });
});

router.post('/createAccount', function(req, res) {
	var username = req.body.username;
	var password1 = req.body.password1;
	var password2 = req.body.password2;
    users.addUser(username, password1);
    res.end();
});

module.exports = router;
