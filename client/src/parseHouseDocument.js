const parseSingleHouseDocument = houseDocument => {
    const {
	_id,
	address,
	beds,
	baths,
	imageDirectory,
	price_per_sqft,
	sqft,
	year_built,
	type,
	description,
	lat,
	lon
    } = houseDocument;
    
  const city = address.split(',')[1].trim();
  const state = address.split(',')[2].slice(1,3);
  //split the address
  const fixedPrice=(price_per_sqft/100).toFixed(2) * sqft;
  //in database, we save $100.01 as 10001
  const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
  // the default value for minimumFractionDigits depends on the currency
  // and is usually already 2
  });
    const pos = {lat:Number.parseFloat(lat) , lng:Number.parseFloat(lon)};

    return {
	_id,
	address,
	city,
	state,
	zipcode: '',
	beds,
	baths,
	imageDirectory,
	size: sqft,
	price:formatter.format(fixedPrice),
	year_built,
	type,
	description,
	pos
    };
};

const parseHouseDocument = houseList => {
  if(!houseList){
    return [];
  }
  else if (Array.isArray(houseList)) {
    // return array if input is array
    return houseList.map(parseSingleHouseDocument);
  } else {
    // return single object if input is single object
    return parseSingleHouseDocument(houseList);
  }
};

export default parseHouseDocument;
