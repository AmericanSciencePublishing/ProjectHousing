const mongoose = require('mongoose');
const { Schema } = mongoose;

const HouseSchema = new Schema({
  descriptionShort: String,
  descriptionFull: String,
  address: { type: String, index: { unique: true } },
  city: String,
  county: String,
  state: String,
  neighborhood: String,
  zipcode: String,
  type: [String],
  beds: Number,
  baths: Number,
  cars: Number,
  size: Number,
  features: [String],
  price: Number,
  forSale: Boolean,
  forRent: Boolean,
  image: String,
  decoration: String,
  year: Number,
  season: String,
  structure: String,
  propertyFee: Number,
  style: String,
  propertyTax: Number,
  facilities: [String]
});

const House = mongoose.model('houses', HouseSchema);

module.exports = House;
