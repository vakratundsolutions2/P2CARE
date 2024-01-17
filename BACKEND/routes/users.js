var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/ur', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;  
