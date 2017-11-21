const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

var userSchema = new Schema({
    email: {
	type: String,
	unique: true,
	trim: true
    },
    password: {
	type: String
    }
});

var test;
//authenticate input against database
userSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({ email: email })
    .exec(function (err, user) {
	if (err) {
	    console.log('1');
            return callback(err);
	} else if (!user) {
	    console.log('2');
            var err = new Error('User not found.');
            err.status = 401;
            return callback(err);
	}
	bcrypt.compare(password, user.password, function (err, result) {
            if (result === true) {
		bcrypt.hash(password, 10, function (err, hash) {
                    if (err) {
                        console.log('aaa');
                        return next(err);
                    }
                    var test = hash;
		    console.log('3');
		    console.log(test);
		    console.log(user.password);
		    return callback(null, user);
		})
            } else {
		bcrypt.hash(password, 10, function (err, hash) {
		    if (err) {
			console.log('fff');
			return next(err);
		    }
		    var test = hash;
		    console.log('4');
		    console.log(password);
		    console.log(test);
		    console.log(user.password);
		    return callback();
		})
            }
	})
    });
}


//hashing a password before saving it to the database

userSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});


const User = mongoose.model('users', userSchema);

module.exports = User;
