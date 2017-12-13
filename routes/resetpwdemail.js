var express = require('express');
const bcrypt = require('bcrypt');
var router = express.Router();
var sendEmail = require('../models/SendEmail');
var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
const { mLab } = require('../config/keys');
mongoose.connect(mLab);
var User = require('../models/User');

router.put('/:linktoken', (req, res) => {
//    console.log("received new reset request",req.body);
    const linkToken = req.params.linktoken;
    console.log("reset password request token:", linkToken);
    var newPassword = req.body.newPassword;
    bcrypt.hash(newPassword, 10, function (err, hash) {
	if (err) {
	    return res.send(err);
	}
	//	console.log(hash);
	User.update({reset_pass_link:linkToken},{$set:{password:hash}},function(err,updatedUser){
	    if(err){
		console.log('error when update new hashedPassword');
		throw err;
	    }
	    else if(updatedUser.n === 1){
//		console.log(updatedUser);
		return res.status(200).json({message:"Successfully set your password"});
	    }
	    else{
		return res.status(200).json({message:"Something wrong happened, please contact us."});
	    }
	});

    })


})




module.exports = router;
