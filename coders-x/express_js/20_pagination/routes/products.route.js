const express = require('express');
const controller = require('../controllers/products.controller');
var router = express.Router();

router.get('/', controller.getProducts);

module.exports = router;
