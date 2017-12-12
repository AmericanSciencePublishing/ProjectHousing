import axios from 'axios';

const save_house_to_store = id => {
  return {
    type: 'SAVE_HOUSE',
    houseID: id
  };
};

export const save_house = id => {
  return dispatch => {
    axios.post('/saved_houses', { id: id });
    dispatch(save_house_to_store(id));
  };

};

export const save_username = username => ({
  type: 'SAVE_USERNAME',
  username
});
