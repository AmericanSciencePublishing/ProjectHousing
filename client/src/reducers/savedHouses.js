const savedHouses = (state = new Set(), action) => {
  switch (action.type) {
    case 'SAVE_HOUSE':
      let nextState = new Set(state);
      nextState.add(action.houseID);
      return nextState;
    default:
      return state;
  }
};

export default savedHouses;
