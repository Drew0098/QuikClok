const path = require('path');
var db = require('../models');


module.exports = function (app) {

  var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
      res.redirect('/login');
    } else {
      next();
    }
  };

  app.get('/', sessionChecker, (req, res) => {
    res.redirect('/login');
  });

  app.get('/login', sessionChecker, (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
  });

  app.get('/manager', sessionChecker, (req, res) => {
    res.sendFile(path.join(__dirname, '../views/manager-home.html'));
  });
  

//   app.get('/manager', (req, res) => {
//     if (req.session.user && req.cookies.user_sid) {
//       console.log(req.session.user);
//       res.sendFile(path.join(__dirname, '../views/manager-home.html'));
//     } else {
//       res.redirect('/login');
//     }
//   });




  app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  });

}