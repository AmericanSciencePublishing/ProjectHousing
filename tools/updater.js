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
NewHouse.find({}).then(docs => {
  docs.forEach(function(doc, index) {});
});
