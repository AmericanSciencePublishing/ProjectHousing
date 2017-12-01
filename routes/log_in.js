var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
var User = require('../models/User');

const { mLab } = require('../config/keys');
mongoose.connect(mLab);

router.post('/', function(req, res) {
//    console.log('hahaha');
    const email = req.body.email;
    const candidatePassword = req.body.password;
   
    User.authenticate(email, candidatePassword, function (error, user) {
	if (error) {
            var err = new Error('Wrong email');
            err.status = 402;
//            console.log('fail');
            res.send(err);
	}
	else if (!user) {
            var err = new Error('Wrong password.');
            err.status = 401;
//            console.log('fail');
	    res.send(err);
	} else {
            req.session.userId = user._id;
//	    console.log('yes!');
	    res.send(user.toJSON());
	}
    });
})

module.exports = router;
