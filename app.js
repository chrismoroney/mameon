var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');


var homeRouter = require('./routes/home');
var servicesRouter = require('./routes/services');
var storiesRouter = require('./routes/stories');
var aboutusRouter = require('./routes/aboutus');
var contactRouter = require('./routes/contact');
var sendRouter = require('./routes/send');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


app.use('/', homeRouter);
app.use('/services', servicesRouter);
app.use('/stories', storiesRouter);
app.use('/aboutus', aboutusRouter);
app.use('/contact', contactRouter);
app.use('/send', sendRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('.jade/error');
});

module.exports = app;
