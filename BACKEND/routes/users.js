var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/ur', function(req, res, next) {
  // res.json(req);
   console.log("007");
  res.send({
    url : req.url ,
    message : 'Hello, world'
  })

});

module.exports = router;  
