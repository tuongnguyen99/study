const express = require('express');
const controller = require('../controllers/users.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/new', controller.new);
router.post('/new', controller.postNew);
router.get('/search', controller.search);
router.get('/:id', controller.info);


module.exports = router;
