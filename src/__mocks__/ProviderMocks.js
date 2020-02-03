import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import initialState from './initialState';
import reducer from '../reducers';

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

const ProviderMock = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        { props.children }
      </BrowserRouter>
    </Provider>
  );
};

export default ProviderMock;
