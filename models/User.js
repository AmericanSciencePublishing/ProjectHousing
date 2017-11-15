const mongoose = require('mongoose');
const { Schema } = mongoose;

var userSchema = new Schema({
  email: {type: String, index: {unique: true}},
  password: String
});

const User = mongoose.model('users', userSchema);

module.exports = {
  User: User
}
