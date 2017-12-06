const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const { mLab } = require('../config/keys');
mongoose.connect(mLab);

const City = require('../models/City');

router.get('/:city', function(req, res) {
  const city = req.params.city;

  City.findOne({ city }).then(doc => res.send(doc));
});

module.exports = router;
