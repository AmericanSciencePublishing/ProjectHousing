var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
var User = require('../models/User');

const { mLab } = require('../config/keys');
mongoose.connect(mLab);

router.put('/:id', function (req,res) {
    //    console.log(req.session.userId);
  //  User.findOne({ _id : req.params.id}, function(err, doc){
//	console.log(doc);
//	if(doc.status === 'online'){
//	    res.send();
//	}
//    });
    User.update({_id: req.params.id},{$set:{user_status:'online'}},function(err,updatedUser){
	if(err){
	    console.log('error when put user online');
	    throw err;
	}
//	console.log(updatedUser);
	res.send(updatedUser);
    });
});

module.exports = router;
