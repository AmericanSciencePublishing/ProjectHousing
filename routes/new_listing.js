const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const mongoDBURI = require('../config/keys').mLab;
mongoose.connect(mongoDBURI);

const House = require('../models/House');

router.get('/', function(req, res, next) {
  House.find({}).then(doc => res.send(doc));
});

module.exports = router;
