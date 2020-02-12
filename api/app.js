var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Server port
var HTTP_PORT = 8000;
// Start server
app.listen(HTTP_PORT, () => {
	console.log('Server running on port %PORT%'.replace('%PORT%', HTTP_PORT));
});

// Default response
app.use(function(req, res) {
	res.status(404);
});

module.exports = app;
