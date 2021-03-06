var express = require('express');
var engines = require('consolidate');
var mustache = require('mustache');
//var path = require('path');

var app = express();

app.set('port', 3000);
app.set('views', __dirname + '/public');
app.set('view engine', 'html');
app.engine('html', engines.mustache);
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {res.render('index.html')});
app.get('/sections', function(req, res) {res.render('sections.html')});
app.get('/about', function(req, res) {res.render('about.html')});
app.get('/news', function(req, res) {res.render('news.html')});
app.get('/donate', function(req, res) {res.render('donate.html')});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found!');
    err.status = 404;
    next(err);
});

app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
