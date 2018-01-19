const express = require('express');
const router = express.Router();

const House = require('../models/NewHouse');

router.get('/', function(req, res) {
  const { query } = req;
  console.log('query', query);

  const address = query.address
    ? { address: { $regex: query.address, $options: 'i' } }
    : {};
  const type = query.type ? { type: query.type } : {};
  const minPrice = query.minPrice ? { price: { $gte: query.minPrice } } : {};
  const maxPrice = query.maxPrice ? { price: { $lte: query.maxPrice } } : {};
  const beds = query.beds ? { beds: { $gte: query.beds } } : {};
  const baths = query.baths ? { baths: { $gte: query.baths } } : {};
  const houseSize = query.houseSize
    ? { houseSize: { $gte: query.houseSize } }
    : {};
  const lotSize = query.lotSize ? { lotSize: { $gte: query.lotSize } } : {};
  const age = query.age ? { age: { $lte: query.age } } : {};

  const limitEntries = query.page ? query.page * 4 : 4;

  const conditons = {
    ...address,
    ...type,
    ...minPrice,
    ...maxPrice,
    ...beds,
    ...baths,
    ...houseSize,
    ...lotSize,
    ...age
  };

  console.log('conditons: ', conditons);

  House.find(conditons)
    .limit(limitEntries)
    .then(doc => res.send(doc));
});

module.exports = router;
