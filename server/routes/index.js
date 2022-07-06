var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pen15', function(req, res, next) {
  res.status(200).send("pen15");
});

module.exports = router;
