const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const { mLab } = require('../config/keys');
mongoose.connect(mLab);

const House = require('../models/House');

router.get('/:id', function(req, res) {
  const id = req.params.id;
  House.find({ _id: id })
    .then(doc => res.send(doc))
    .catch(err => res.send(err));
});

module.exports = router;
