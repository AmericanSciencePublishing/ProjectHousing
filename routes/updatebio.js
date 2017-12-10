var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User');

const { mLab } = require('../config/keys');
mongoose.connect(mLab);

router.put('/:id', function (req,res) {
//    console.log(req);
    var newbio = req.body.newBio;
    User.update({_id: req.params.id},{$set:{bio: newbio}},function(err,updatedUser){
	if(err){
	    console.log('error when update user bio');
	    throw err;
	}
//	console.log(updatedUser);
	res.send(updatedUser);
    });
});

module.exports = router;
