const savedHouses = (state = new Set(), action) => {
  let nextState;

  switch (action.type) {
    case 'SAVE_HOUSE':
      nextState = new Set(state);
      nextState.add(action.houseID);
      return nextState;
    case 'REMOVE_HOUSE':
      nextState = state;
      if (nextState.has(action.houseID)) {
        nextState.delete(action.houseID);
        return nextState;
      }
      return nextState;
    default:
      return state;
  }
};

export default savedHouses;
