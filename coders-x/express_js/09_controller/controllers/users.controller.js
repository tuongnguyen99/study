const db = require('../db');

module.exports.index = function(req, res){
  var users = db.get('users').value();
  res.render('users', {
    users: users
  });
};

module.exports.newUser = function(req, res){
  db.get('users').push(req.body).write();
  res.redirect('/users');
}
