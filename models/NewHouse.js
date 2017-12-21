const mongoose = require('mongoose');
const { Schema } = mongoose;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

const HouseSchema = new Schema({
    house_id : String,
    address : String,
    type: String,
    year_built: String,
    beds : String,
    baths: String,
    sqft : String,
    lot : String,
    price_per_sqft : Currency,
    descriptions_short : [String],
    description : String,
    bedrooms : [String],
    bathrooms : [String],
    kitchen_dining : [String],
    exterior_and_lot : [String],
    other_rooms : [String],
    interior : [String],
    home : [String],
    building_construction : [String],
    garage_parking : [String],
    heating_cooling : [String],
    utilities : [String],
    appliances : [String],
    amenities_community_feature : [String],
    school_information: [String],
    other_info : [String],
    save_date : String,
    save_time : String,
    images:[{
	data: Buffer,
	content_type: String
    }],
    lat : String,
    lon : String
});

const NewHouse = mongoose.model('devhouses', HouseSchema);

module.exports = NewHouse;
