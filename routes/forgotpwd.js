var express = require('express');
var router = express.Router();
var sendEmail = require('../models/SendEmail');
//var mailer = sendEmail();
var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
const { mLab } = require('../config/keys');
mongoose.connect(mLab);
var User = require('../models/User');
const {APP_URL_BASE} = process.env;

// create a random string as a token for user who reset pwd
const randomString = length => {
    let text = "";
    const possible = "abcdefghijklmnopqrstuvwxyz0123456789_-.";
    for ( let i = 0; i < length; i++){
	text = text +  possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

router.put('/', (req, res) => {
//    console.log(req.body);
    if ( !req.body) return res.status(400).json({message: 'no request body'});
    if ( !req.body.email) return res.status(400).json({message: 'no email in request'});
/*    User.findOne({email : req.body.email}, function(err, doc){
	console.log("Reset password check email result:",doc);
	if(err){
	    res.send();
	}
	//if the session exist && never signed up, send back json to automatically sign in
	else if (doc ){
	    res.send(doc.toJSON());
	}
	else{
	    res.send();
	}

    });
*/
    const token = randomString(40); //TODO may not unique string;
//    var e = req.body.email;
    const emailData = {
	from : 'testzhao <testttt@qq.com>',
	to : req.body.email,
	subject : "Reset password",
	text : 'please use the following link for instructions to reset your password :',
	html:`<p>use the following link to reset your password</p><a href="http://localhost:3000/resetpwd/${token}">hello</a>`
    };
//    console.log(emailData);
    User.update({ email : req.body.email}, { $set: { resetPassLink : token }}, function(error, feedback){
	//todo set a time out;
	if ( error) return res.send(error);
	else if(feedback.n===1){
	    console.log("hello:",feedback);
	    sendEmail(emailData);
	    return res.status(200).json({message:`Email has been sent to ${req.body.email}. Please check your email account's Spam or Junk folder to ensure the message was not filtered.`});
	}
	else{
	    return res.status(200).json({message:"Sorry, we can't find this E-mail address."});
	 }
     });
});


module.exports = router;
