var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const { mLab } = require('../config/keys');
mongoose.connect(mLab);

const { User } = require('../models/User');

router.post('/', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  match(email, password, res);
});

async function match(email, password, res) {
  const found = await User.findOne({ email, password });
  if (found) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
}

module.exports = router;
