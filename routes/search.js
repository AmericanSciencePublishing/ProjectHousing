const express = require('express');
const router = express.Router();

const House = require('../models/NewHouse');

router.get('/', function(req, res) {
  const address = req.query.address;
  console.log('Address: ', address);

  House.find({ address: { $regex: address, $options: 'i' } }).then(doc =>
    res.send(doc)
  );
});

module.exports = router;
