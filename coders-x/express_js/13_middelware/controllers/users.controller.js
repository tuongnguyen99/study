const uniqid = require('uniqid');
const db = require('../db');

module.exports.index = function(req, res) {
  const users = db.get('users').value();
  res.render('./users/index', {
    users: users
  });
};
module.exports.new = function(req, res) {
  res.render('./users/new');
};
module.exports.postNew = function(req, res){
  console.log(res.locals.share);
  var newUser = req.body;
  newUser.id = uniqid();
  db.get('users').push(newUser).write();
  res.redirect('/users');
};
module.exports.info = function(req, res){
  const users = db.get('users').value();
  var user = users.filter(function(user) {
    return user.id === req.params.id;
  });
  res.render('./users/info', {
    user: user[0]
  });
}
module.exports.search =function(req, res){
  const name = req.query.name;
  var users = db.get('users').value().filter((user) => {
    return user.name === name;
  });
  res.render('./users/index', {
    users: users
  });
};
