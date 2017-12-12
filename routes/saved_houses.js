var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/User');
mongoose.connect(require('../config/keys').mLab);

router
  .post('/', function(req, res) {
    const houseID = req.body.id;

    const userId = req.session.userId;

    if (!userId) {
      res.end();
    }

    User.findByIdAndUpdate(userId, {
      $addToSet: { savedHouses: houseID }
    }).then(doc => {
      res.end();
    });
  })
  .get('/', function(req, res) {
    User.findById(req.session.userId).then(doc => res.send(doc.savedHouses));
  });

module.exports = router;
