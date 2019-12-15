const db = require('../db');
module.exports.requireLogin = function(req, res, next){
  var cookie = req.cookies.user_id;
  if(!cookie){
    res.redirect('/login');
    return;
  }
  var user = db.get('users').find({id: cookie}).value();
  if (!user) {
    res.redirect('/login');
    return;
  }
  next();
}
