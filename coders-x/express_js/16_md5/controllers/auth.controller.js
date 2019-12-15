const db = require('../db');
const md5 = require('md5');
module.exports.index = function(req, res){
  res.render('./auth/index');
};

module.exports.login = function(req, res, next){
  var username = req.body.username;
  var password = md5(req.body.password);

  var user = db.get('users')
               .find({name: username})
               .value();
  if(!user){
    res.render('./auth/index', {
      errors: [
        "Username does not exist!"
      ]
    });
    return;
  };

  if (password!==user.password) {
    res.render('./auth/index', {
      errors: [
        "Wrong password!"
      ]
    })
    return;
  };
  res.cookie('user_id', user.id, {
    signed: true
  });
  res.redirect('/users');
}
