const express = require('express');
const router = express.Router();

const House = require('../models/NewHouse');

router.get('/', function(req, res) {
  const city = req.query.city;
  console.log(city);

  House.find({city}).then(doc => res.send(doc));
});

module.exports = router;
