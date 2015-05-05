var express = require('express');
var router = express.Router();

router.use(require('./login'));
router.use(require('./home'));

router.get('/', function(req, res) {
	res.redirect('/login');
});

module.exports = router;
