module.exports.createUser = function(req, res, next) {
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
  res.locals.share = "Share Value";
  next();
};
