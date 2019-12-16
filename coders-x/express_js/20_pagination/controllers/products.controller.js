const db = require('../db');
module.exports.getProducts = function(req, res) {
  var pq = 16;
  var page = parseInt(req.query.page) || 1;
  var products = db.get('products').drop((page-1)*pq).take(pq).value();
  res.render('./products/index', {
    products: products,
    page: page
  })
};
