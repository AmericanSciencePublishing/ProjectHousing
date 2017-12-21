const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
const { Schema } = mongoose;

var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true
  },
  password: {
    type: String
  },
  username: {
    type: String
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  signupdate: {
    type: String
  },
  signuptime: {
    type: String
  },
  user_status: {
    type: String
  },
  reset_pass_link: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  bio: {
    type: String
  },
  saved_houses: [String]
});

//authenticate input against database
//for the console log, 1:system err, 2:no such email, 3:login successfully, 4:wrong password with right email
userSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email }).exec(function(err, user) {
    if (err) {
      console.log('1');
      return callback(err);
    } else if (!user) {
      console.log('2');
      var err = new Error('User not found.');
      err.status = 401;
      console.log(err);
      return callback(err);
    }
    bcrypt.compare(password, user.password, function(err, result) {
      if (result === true) {
        console.log('3');
        return callback(null, user);
      } else {
        console.log('4');
        return callback();
      }
    });
  });
};

//hashing a password before saving it to the database

userSchema.pre('save', function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

//please always use this toJSON() method to avoid sending hashpassword
//or any other values that dont need to be send back to client.
userSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    delete ret.password;
    delete ret.reset_pass_link;
    delete ret.user_status;
    delete ret.signuptime;
    return ret;
  }
});

const User = mongoose.model('users', userSchema);

module.exports = User;
