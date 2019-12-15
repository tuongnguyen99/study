const express = require('express');
const controller = require('../controllers/auth.controller');
var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.login);

module.exports = router;
