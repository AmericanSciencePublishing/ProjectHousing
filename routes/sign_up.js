var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const keys = require('../keys');

mongoose.connect(keys.mLab);

var userSchema = new Schema({
  email: String,
  password: String
});

var User = mongoose.model('users', userSchema);

router.post('/', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  saveUser(email, password, res);
});

async function saveUser(email, password, res){
  let userExistence = await User.find({email: email});
  if (userExistence.length == 0){
    let doc = await new User({ email: email, password: password }).save();
    res.send(doc);
  }
  else{
    res.send('Duplicate E-mail');
  }
}

module.exports = router;
