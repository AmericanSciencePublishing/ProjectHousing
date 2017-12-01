var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
var User = require('../models/User');

const { mLab } = require('../config/keys');
mongoose.connect(mLab);

router.get('/', function (req,res) {
    console.log(req.session.userId);
    if(req.session.userId === undefined){
	console.log('session undefined');
	res.send();
    }
    User.findOne({_id : req.session.userId}, function(err, doc){
	console.log(doc);
	if(err){
	    res.send();
	}
	else if (doc !== null && doc.userStatus === 'online' ){
	    res.send(doc.toJSON());
	}
	else{
	    res.send();
	}
	
    });
	
    
});

module.exports = router;
