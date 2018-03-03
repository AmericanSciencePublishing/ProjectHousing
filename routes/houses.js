const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const { mLab } = require('../config/keys');
mongoose.connect(mLab);

const House = require('../models/NewHouse');

router
  .get('/', function(req, res) {
    const houseList = House.find({})
      .then(doc => res.send(doc))
      .catch(err => res.send(err));
  })
  .get('/new-construction', function(req, res) {
    // send the first 2 houses
    const houseList = House.find({})
      .then(docs => res.send(docs.slice(0, 2)))
      .catch(err => res.send(err));
  })
  .get('/new-listing', function(req, res) {
    // send 2 houses
    const houseList = House.find({})
      .then(docs => res.send(docs.slice(0, 2)))
      .catch(err => res.send(err));
  })
  .get('/commercial', function(req, res) {
    // send 2 houses
    const houseList = House.find({})
      .then(docs => res.send(docs.slice(2, 4)))
      .catch(err => res.send(err));
  })
  .get('/great-school', function(req, res) {
    // send 2 houses
    const houseList = House.find({})
      .then(docs => res.send(docs.slice(2, 4)))
      .catch(err => res.send(err));
  })
  .get('/recommended', function(req, res) {
    const houseList = House.find()
      .then(docs => res.send(docs.slice(0, 2)))
      .catch(err => console.log(err));
  })
  .get('/:id', function(req, res) {
    const id = req.params.id;
    House.findOne({ _id: id })
      .then(doc => res.send(doc))
      .catch(err => res.send(err));
  })
  .post('/idList',function(req,res){
    const idList = req.body.idList;
    House.find({ _id:{$in : idList }})
      .then(doc => res.send(doc))
      .catch(err => res.send(err));

  })

module.exports = router;
