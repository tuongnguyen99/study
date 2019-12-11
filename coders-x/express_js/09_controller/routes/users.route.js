const express = require('express');
const userController = require('../controllers/users.controller');
const router = express.Router();

router.get('/', userController.index);
router.post('/new', userController.newUser)

module.exports = router;
