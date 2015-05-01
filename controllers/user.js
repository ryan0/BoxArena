var express = require('express');
var pg = require('pg');
var router = express.Router();

var con ="postgress://admin:guest@localhost/boxdatabase";

router.post('/login', function(req, res) {
	var name = req.body.username;
	var password = req.body.password;
	console.log(name + ' ' + password);
	
	pg.connect(process.env.DATABASE_URL || con, function(err, client, done) {
		client.query('SELECT * FROM Users', function (err, result) {
			done();
			if(err)
			{console.error(err); response.send("ERORR " + err); }
			else
			{res.send(result.rows);}
		});
	});
});

module.exports = router;
