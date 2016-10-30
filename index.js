var express = require('express');
var app = express();
app.set('view-engine', 'ejs');

var session = require('express-session');
var bodyParser = require('body-parser');

//Serve static before session
app.use(express.static('public'));

/**
 * Session above all
 */
app.use(session({
  secret: 'i like trains',
  cookie: {
    maxAge: 60000
  },
  resave: true,
  saveUninitialized: false
}));

/**
 * Parse parameters in POST
 */
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

/**
 * Include all the routes
 */
require('./routes/todos')(app);
require('./routes/outside')(app);

/**
 * Standard error handler
 */
app.use(function (err, req, res, next) {
  res.status(500).send('Server problem occured!');

  //Flush out the stack to the console
  console.error(err.stack);
});

var server = app.listen(3000, function () {
  console.log('Hello :3000');
});
