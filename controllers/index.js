var express = require('express');
var router = express.Router();

router.use(require('./login'));
router.use(require('./home'));
router.use(require('./arena'));

router.get('/', function(req, res) {
    if(req.session.username) {
        res.redirect('/home');
    }
    else {
	    res.redirect('/login');
    }
});

module.exports = router;
