const savedHouses = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_HOUSE':
      return [...state, action.houseID];
    default:
      return state;
  }
};

export default savedHouses;
