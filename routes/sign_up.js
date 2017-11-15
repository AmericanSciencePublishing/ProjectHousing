var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const { mLab } = require('../config/keys');
mongoose.connect(mLab);

const { User } = require('../models/User');

router.post('/', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({ email, password });

  newUser
    .save()
    .then(() => res.send({ success: true }))
    .catch(e => res.send({ success: false, error: e }));
});

module.exports = router;
