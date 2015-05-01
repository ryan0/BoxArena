var express = require('express');
var router = express.Router();

router.use(require('./user'));

router.get('/', function(req, res) {
	res.render('index');
});

module.exports = router;
