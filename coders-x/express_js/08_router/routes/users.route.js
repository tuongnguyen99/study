const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('./users/index');
});



module.exports = router;
