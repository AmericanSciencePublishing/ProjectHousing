var moment = require('moment');
var junk = require('junk');

var mongoose = require('mongoose');
const { mLab } = require('../config/keys');
mongoose.connect(mLab);
var NewHouse = require('../models/NewHouse');
var User = require('../models/User');


//this is an updater for future database maintenance
//always keep in mind before inserting a new field, write it in your schema.
User.update({},{$set:{saved_house:['1','2','3']}},{upsert:false,multi:true},function(err,updatedUser){
    if(err){
	console.log('error when update database');
	throw err;
    }
    console.log("updated!",updatedUser);

});
