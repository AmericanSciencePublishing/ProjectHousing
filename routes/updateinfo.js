var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User');

const { mLab } = require('../config/keys');
mongoose.connect(mLab);

router.put('/:id', function (req,res) {
    //    console.log(req.body);
    if(req.body.phone){
	var newphone = req.body.phone;
	User.update({_id: req.params.id},{$set:{phone: newphone}},function(err,updatedUser){
	if(err){
	    console.log('error when update user phone');
	    throw err;
	}
	res.send(updatedUser);
	});
    }
    if(req.body.email){
	var newemail = req.body.email;
        User.update({_id: req.params.id},{$set:{email: newemail}},function(err,updatedUser){
        if(err){
            console.log('error when update user email');
            throw err;
        }
        res.send(updatedUser);
        });
    }
    if(req.body.firstname && req.body.lastname){
        var newfirstname = req.body.firstname;
	var newlastname = req.body.lastname;
        User.update({_id: req.params.id},{$set:{firstname:newfirstname, lastname:newlastname}},function(err,updatedUser){
        if(err){
            console.log('error when update user email');
            throw err;
        }
        res.send(updatedUser);
        });
    }
    

});

module.exports = router;
