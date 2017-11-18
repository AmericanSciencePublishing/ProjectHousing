var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const { mLab } = require('../config/keys');
mongoose.connect(mLab);
var User = require('../models/User');

router.post('/', function(req, res, next) {
    //here is a bug, when using if(email&&password),the if will return 0 when you sign up as a new user with a new email. delete$$password 'sovle this', I think its about User.create, in which there is a hash for password.
    if(req.body.email){
	var userData = {
	    email : req.body.email,
	    password : req.body.password
	}
/*
  user.save(function(err) {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // Duplicate username
        return res.status(500).send({ succes: false, message: 'User already exi
*/
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
	err.status = 408;
	return next(err);
    }
});

	    
module.exports = router;
