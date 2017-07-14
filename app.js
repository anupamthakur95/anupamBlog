var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var firebase = require("firebase");

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var register = require('./routes/register');
    var config = {
        apiKey: "**************",
        authDomain: "anu*************",
        databaseURL: "https://an****************.com",
        projectId: "anupam-blog",
        storageBucket: "a*************************",
        messagingSenderId: "260***********08"
};



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use('/register', register);


app.get('/public/images/ece.png',function (req,res) {
    res.sendFile(path.join(__dirname,'public','images','ece.png'));
});
app.get('/public/images/java.png',function (req,res) {
    res.sendFile(path.join(__dirname,'public','images','java.png'));
});
app.get('/public/images/programs.png',function (req,res) {
    res.sendFile(path.join(__dirname,'public','images','programs.png'));
});
app.get('/public/images/program.png',function (req,res) {
    res.sendFile(path.join(__dirname,'public','images','program.png'));
});
app.get('/public/images/avatar.png',function (req,res) {
    res.sendFile(path.join(__dirname,'public','images','avatar.png'));
});
app.get('/public/images/register.png',function (req,res) {
    res.sendFile(path.join(__dirname,'public','images','register.png'));
});



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

module.exports = app;
