import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

import rootReducer from './reducers';
import { save_house_to_store, set_username } from './actions';
let store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

axios
  .get('/api/current_user')
  .then(res => res.data)
  .then(user => {
    // put saved houses in redux store
    const saved_houses = user.savedHouses || [];
    saved_houses.map(house => store.dispatch(save_house_to_store(house)));
    // set username
    store.dispatch(set_username(user.userName));
  });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
