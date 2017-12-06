const mongoose = require('mongoose');
const { Schema } = mongoose;

const CitySchema = new Schema({
  city: { type: String, unique: { index: true } },
  description: String,
  image: String
});

const City = mongoose.model('cities', CitySchema);

module.exports = City;
