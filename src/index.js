import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import RoutesIPC from './routes/RoutesIPC';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <RoutesIPC />
  </Provider>,
  document.getElementById('ipc-module'),
);
