var fs = require('fs');
var csv = require('fast-csv');
var path = require('path');
var mongoose = require('mongoose');
var moment = require('moment');
var junk = require('junk');
const { mLab } = require('../config/keys');
mongoose.connect(mLab);
var NewHouse = require('../models/NewHouse.js');
//use houseInstance if use .save()
var houseInstance = new NewHouse;

//set image path
var images = new Array();
var imgdirpath = process.argv[3];
var csvfilepath = process.argv[2];

if(imgdirpath){
var walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
//	console.log(list);
	if (err) return done(err);
	list=list.filter(junk.not);
	var pending = list.length;
	if (!pending) return done(null, results);
	list.forEach(function(file) {
	    file = path.resolve(dir, file);
	    fs.stat(file, function(err, stat) {
		results.push(file);
		if (!--pending) done(null, results);
	    });
	});
    });
};

walk(imgdirpath, function(err, results) {
    if (err) throw err;
    results.forEach(function(file) {
	var subimage={data : fs.readFileSync(file),content_type:'image/jpeg'};
	images.push(subimage);
    });
//    console.log(images);
});
}


var stream = fs.createReadStream(csvfilepath);
var headtag=0;
var readResult={};
var fieldnames={};
csv.fromStream(stream,{ignoreEmpty:true})
    .on("data", function(data){
	if(headtag === 0){
	    fieldnames = data;
	    for(var i=+0; i<data.length; i++){
		readResult["data[i]"] = {};
	    }
	}
	if(headtag === 1){
	    for(var i=+0; i<data.length; i++){
		readResult[fieldnames[i]] = data[i];
	    }
	}
	if(headtag === 2){
	    for(var i=+0 ; i<data.length; i++){
		if(data[i]!==""){
		    readResult[fieldnames[i]]=new Array( readResult[fieldnames[i]]);
		     readResult[fieldnames[i]].push(data[i]);
		}
	    }
	}
	if(headtag > 2){
	    for(var i=+0 ; i<data.length; i++){
                if(data[i]!==""){
		    readResult[fieldnames[i]].push(data[i]);
                }
            }
	}
	headtag=headtag+1;
    })
    .on("end",function(){
	readResult.images = images;
	var startdate = moment().format('MM/DD/YYYY');
	var starttime = moment().format('H:mm:ss');
	readResult.save_date=startdate;
	readResult.save_time=starttime;
	NewHouse.create(readResult, function(error, house){
	    if(error){
		console.log(error);
	    }
	    else{
		console.log("successfully create a document in devhouses!");
	    }
	});
    });

/*
//read line by line
rl.on('line', (line) => {
    var arr = line.split(",").map(function (val){
	return String(val);
    });
    //    console.log(arr[0]);
    var fieldname = arr[0];

});
*/

//use houseDate if use NewHouse.create()
//http://shancarter.github.io/mr-data-converter/ convert csv to json

/*var houseDate = {
    house_id : 1,
    "images" : [{data : fs.readFileSync(imgPath1),content_type:'image/jpeg'}],
    bedrooms:["Bedrooms (All Levels): 4","Bedrooms (Above Grade): 4","Master Bedroom: 21x15","Master Bedroom Bath: Full","2nd Bedroom: 14x13","3rd Bedroom: 15x14","4th Bedroom: 15x12","Master Bedroom Level: 2nd Level","2nd Bedroom Level: 2nd Level","3rd Bedroom Level: 2nd Level","4th Bedroom Level: 2nd Level","Master Bedroom Flooring: Carpet","2nd Bedroom Flooring: Carpet","3rd Bedroom Flooring: Carpet","4th Bedroom Flooring: Carpet","Bedrooms: 4"]
}
NewHouse.create(readResult, function(error, house){
    if(error){
	console.log(error);
    }
    else{
	console.log("successfully!", house);
    }
});
*/




/*
 headers : ["house_id",\
"address","type","year_built","beds","baths","sqft","lot","price_per_sqft","des\
cription","bedrooms","bathrooms","kitchen_dining","exterior_and_lot","other_roo\
ms","interior","home","building_construction","garage_parking","heating_cooling\
","utilities","appliances","amenities_community_feature","school_information","\
other_info"],
*/
