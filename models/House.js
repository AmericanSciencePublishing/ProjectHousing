const mongoose = require('mongoose');
const {Schema} = mongoose;

const HouseSchema = new Schema({
  name: String,
  address: {type: String, index: {unique: true}},
  city: String,
  zipcode: String,
  description: String,
  type: String,
  size: Number,
  features: [String],
  price: Number,
  image: String,
  url: String
})

const House = mongoose.model('houses', HouseSchema);

module.exports = House;
