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
    User.update({_id: req.params.id},{$set:{status:'online'}},function(err,updatedUser){
	if(err){
	    console.log('aaa');
	    throw err;
	}
	console.log(updatedUser);
	res.send(updatedUser);
    });
});

module.exports = router;
