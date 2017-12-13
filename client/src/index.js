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
import { save_house_to_store } from './actions';
let store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

axios
  .get('/users')
  .then(res => res.data)
  .then(user => {
    const saved_houses = user.savedHouses || [];    
    saved_houses.map(house => store.dispatch(save_house_to_store(house)));
  });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
