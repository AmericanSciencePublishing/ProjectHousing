var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/User');
mongoose.connect(require('../config/keys').mLab);

router
  .post('/add', function(req, res) {
    const houseID = req.body.id;
    const userId = req.session.userId;

    if (!userId) {
      res.end();
    }

    User.findByIdAndUpdate(userId, {
      $addToSet: { saved_houses: houseID }
    }).then(doc => {
      res.send(doc);
    });
  })
  .post('/delete', function(req, res) {
    const houseID = req.body.id;
    const userId = req.session.userId;

    if (!userId) {
      res.send('User not logged in!');
    }

    User.findByIdAndUpdate(userId, {
      $pull: { saved_houses: houseID }
    }).then(doc => {
      res.send(doc);
    });
  })
  .get('/', function(req, res) {
    User.findById(req.session.userId).then(doc => res.send(doc.savedHouses));
  });

module.exports = router;
