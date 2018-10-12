var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/myname', function(req, res, next) {
  res.send('Des');
});
router.get('/cool', function(req, res, next){
  res.send('Your soo cool Dude!')
})
module.exports = router;
