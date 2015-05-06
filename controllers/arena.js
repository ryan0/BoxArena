var express = require('express');
var router = express.Router();

router.get('/arena', function(req, res) {
    res.render('arena');
});

module.exports = router;
