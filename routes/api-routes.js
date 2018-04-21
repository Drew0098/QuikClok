const path = require('path');
var db = require('../models');


module.exports = function (app) {


  app.post('/signup', function (req, res) {
    db.User.create({
        fName: req.body.fName,
        lName: req.body.lName,
        bName: req.body.bName,
        accountType: req.body.accountType,
        username: req.body.username,
        password: req.body.password
      })
      .then(function (user) {
        req.session.user = user.id;
        res.redirect('/manager');
      })
      .catch(function (error) {
        res.redirect('/login');
      });
  });


  app.post('/login', function (req, res) {
    // const username = req.body.username;
    // const password = req.body.password;
    
    // db.User.({
    //   where: {
    //     username: username
    //   }
    // })
    db.User.create({
      fName: req.body.fName,
      lName: req.body.lName,
      bName: req.body.bName,
      accountType: req.body.accountType,
      username: req.body.username,
      password: req.body.password
    })
    .then(function (user) {
      req.session.user = user.id;
      res.redirect('/manager');
    })
    .catch(function (error) {
      res.redirect('/login');
    });
  });

  app.get('/api/user', function (req, res) {
    if (req.session.user && req.cookies.user_sid) {
      db.User.findOne({
          where: {
            id: req.session.user
          }
        })
        .then(function (dbUser) {
          res.json(dbUser);
        });
    } else {
      res.redirect('/login');
    }
  });
  
  app.put('/api/user', function (req, res) {
    db.User.update(req.body, {
        where: {
          id: req.session.user
        }
      })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });
};