var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(require('./controllers'));

app.listen(app.get('port'));
