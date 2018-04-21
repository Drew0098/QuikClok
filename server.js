var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');


var app = express();
var PORT = process.env.PORT || 3002;


var db = require("./models");


app.use(bodyParser.urlencoded({ extended: true }));


app.use(cookieParser());


app.use(session({
  key: 'user_sid',
  secret: 'supersecretsercet', 
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 3600000
  }
}));


app.use(function (req, res, next) {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});

app.use(express.static('public'));

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);


db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});