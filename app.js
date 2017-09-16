var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const passport = require('passport');
var bunyan = require('bunyan');
const session = require('express-session');
require('assert-plus');
require('restify');
const Chart = require('chart.js');
// require('jQuery.print');

var index = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');
const login = require('./routes/login');


// Add some logging
var log = bunyan.createLogger({
  name: 'Microsoft OIDC Example Web Application'
});

var app = express();
//Models
var models = require("./server/models");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());



app.use('/login', login);


// app.use(function(req, res, next) {       // Catches access to all other pages
//     if(!req.session.accessToken) {       // requiring a valid access token
//         res.redirect('/login');
//     } else {
//         next();
//     }
// });

app.use('/', index);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


 
//Sync Database
models.sequelize.sync({ force: true }).then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

module.exports = app;
