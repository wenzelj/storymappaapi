var logger = require('morgan');
var cors = require('cors');
var http = require('http');
var express = require('express');
var errorhandler = require('errorhandler');
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
var app = express();

dotenv.load();

// Parsers
// old version of line
// app.use(bodyParser.urlencoded());
// new version of line
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(function(err, req, res, next) {
  if (err.name === 'StatusError') {
    res.send(err.status, err.message);
  } else {
    next(err);
  }
});

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  app.use(errorhandler())
}

//app.use(require('./user-routes'));
app.use(require('./n-user'));
app.use(require('./n-open-routes'));
app.use(require('./n-api-data'));

var port = process.env.PORT || 3001;

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});

