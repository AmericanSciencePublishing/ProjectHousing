var moment = require('moment');
var junk = require('junk');

var mongoose = require('mongoose');
const { mLab } = require('../config/keys');
mongoose.connect(mLab);
var NewHouse = require('../models/NewHouse');
var User = require('../models/User');

// var lon = process.argv[4];
// var lat = process.argv[3];
// var id = process.argv[2];
// console.log(id);
// console.log(lat);
// console.log(lon);

//this is an updater for future database maintenance
//always keep in mind before inserting a new field, write it in your schema.
//upsert:false,multi:true
NewHouse.find({ price_per_sqft: { $exists: true } }).then(docs => {
  console.log('success, length of docs: ', docs.length);

  docs.forEach(function(obj) {

    let price_per_sqft = obj.price_per_sqft;
    price_per_sqft = price_per_sqft.slice(1, price_per_sqft.length);

    console.log(price_per_sqft);
    obj.price_per_sqft=price_per_sqft;
    // obj.price_per_sqft = new NumberInt(price_per_sqft);
    NewHouse.save(obj);
  });
});
