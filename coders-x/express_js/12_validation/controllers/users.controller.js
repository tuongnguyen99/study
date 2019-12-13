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
  var newUser = req.body;
  var errs = [];
  if (!req.body.name.length) {
    errs.push('Please enter your name!');
  };
  if (!req.body.age.length) {
    errs.push('Please enter your age!')
  };
  if(errs.length){
    res.render('./users/new',{
      errs: errs,
      value: req.body
    });
    return;
  }
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
