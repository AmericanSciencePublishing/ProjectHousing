import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css';
//fontawesome icon lib

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import * as UserAPI from './utils/UserAPI';

import rootReducer from './reducers';
import { save_house_to_store, set_username } from './actions';

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

  UserAPI
  .getUser()
  .then(user => {
    if (user) { // no cookie in browser, therefore no previous state
      // put saved houses in redux store
      const saved_houses = user.saved_houses || [];
      saved_houses.map(house => store.dispatch(save_house_to_store(house)));
      // set username
      store.dispatch(set_username(user.username));
    }
  });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
