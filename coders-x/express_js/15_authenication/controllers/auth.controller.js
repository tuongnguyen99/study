const db = require('../db');
module.exports.index = function(req, res){
  res.render('./auth/index');
};

module.exports.login = function(req, res, next){
  var username = req.body.username;
  var password = req.body.password;

  var user = db.get('users')
               .find({name: username})
               .value();
  console.log(username);
  console.log(user);
  if(!user){
    console.log("KTT");
    res.render('./auth/index', {
      errors: [
        "Username does not exist!"
      ]
    });
    return;
  };

  if (password!==user.password) {
    console.log("Sai pass");
    res.render('./auth/index', {
      errors: [
        "Wrong password!"
      ]
    })
    return;
  };
  res.cookie('user_id', user.id);
  res.redirect('/users');
}
