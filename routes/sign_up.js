var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
const { mLab } = require('../config/keys');
mongoose.connect(mLab);
var User = require('../models/User');
var moment = require('moment');

router.post('/', function(req, res, next) {

    //firstly,check if pass1===pass2, if do this step in front-end, will meet a problem with async when set password=pass1 in comparePassword() function
    if (req.body.password1 !== req.body.password2){
	var err = new Error('Passwords do not match.');
	err.status = 400;
	res.send("passwords do not match.",err);
    }
    //here is a bug, when using if(email&&password),the if will return 0 when you sign up as a new user with a new email. delete&&password 'sovle this', I think its about User.create, in which there is a hash for password.
    else if(req.body.email&&(req.body.password1 === req.body.password2)){
	var startdate = moment().format('MM/DD/YYYY');
	var starttime = moment().format('H:mm:ss');
	var userData = {
	    email : req.body.email,
	    password : req.body.password1,
	    //automatically create a username by parsing email address
	    username : req.body.email.substring(0, req.body.email.indexOf("@")),
	    signupdate : startdate,
	    signuptime : starttime,
	    bio : "",
	    phone : "",
	    firstname : "",
	    lastname : ""
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
		req.session.userId = user._id;
//		var toSendUser = user;
//		console.log(user.toObject());
//		console.log(user.toJSON());
		res.send(user.toJSON());
	    }
	});
    }else{
	var err = new Error('All fields required.');
	err.status = 408;
	return next(err);
    }
});

	    
module.exports = router;
