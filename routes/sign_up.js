var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const { mLab } = require('../config/keys');
mongoose.connect(mLab);
var User = require('../models/User');

router.post('/', function(req, res, next) {
    if(req.body.email&&req.body.password){
	
	var userData = {
	    email : req.body.email,
	    password : req.body.password
	}
	
	User.create(userData, function (error, user){
	    if (error){
		res.send(error);

	    } else {
		res.send(user);
//		req.session.userId = user._id;
//		return res.redirect('/');
	    }
	});
    }else{
	var err = new Error('All fields required.');
	err.status = 400;
	return next(err);
    }
});

	    
module.exports = router;
