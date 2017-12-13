const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const User = require('../models/User');
const { mLab } = require('../config/keys');
mongoose.connect(mLab);

router.get('/', function(req, res) {
  const id = req.session.userId;

  User.findById(id).then(doc => res.send(doc));
});

module.exports = router;
