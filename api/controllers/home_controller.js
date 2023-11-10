var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  // response
  var locals = {};
  res.status(200).render('home/index', locals);
});

module.exports = router; 
