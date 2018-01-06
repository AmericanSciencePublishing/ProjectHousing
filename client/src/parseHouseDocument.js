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
    description
  } = houseDocument;
    
  const city = address.split(',')[1].trim();
  const state = address.split(',')[2].slice(1,3);
  //split the address
  const fixedPrice=(price_per_sqft/100).toFixed(2);
  //in database, we save $100.01 as 10001

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
    price:fixedPrice * sqft,
    year_built,
    type,
    description
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
