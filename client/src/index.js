import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import rootReducer from './reducers';
const persistedState = localStorage.getItem('persistedState') ? JSON.parse(localStorage.getItem('persistedState')):{};
let store = createStore(rootReducer, persistedState,  applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.subscribe(()=>{
    localStorage.setItem('persistedState', JSON.stringify(store.getState()));
});

registerServiceWorker();
