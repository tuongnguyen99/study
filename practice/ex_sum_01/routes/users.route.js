const express = require('express');
const controller = require('../controllers/users.controller');
var router = express.Router();

router.get('/', controller.index);

module.exports = router;
