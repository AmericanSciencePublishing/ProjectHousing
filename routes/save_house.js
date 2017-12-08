var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
  const id = req.body.id;

  console.log(`Saved house ID: ${id}`);
  
  res.end();
})

module.exports = router;
