/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const setHistoricalIpcList = (payload) => {
  return ({
    type: 'SET_HISTORICAL_IPC_LIST',
    payload,
  });
};

export const setHistoricalIpcError = (payload) => {
  return ({
    type: 'SET_HISTORICAL_IPC_ERROR',
    payload,
  });
};

export const setIndicatorsMarketIpc = (payload) => {
  return ({
    type: 'SET_INDICATORS_MARKET_IPC',
    payload,
  });
};

export const loginUser = (payload) => {
  return ({
    type: 'LOGIN_USER',
    payload,
  });
};

export const loginRequest = ({ email, password }) => {
  return (dispatch) => {
    axios({
      url: 'http://localhost:3000/api/auth/login',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => dispatch(loginUser(data)))
      .catch((err) => {
        dispatch(loginUser(false));
        dispatch(setHistoricalIpcError(err));
      });
  };
};

export const registerUser = (payload) => {
  return (dispatch) => {
    axios({
      url: 'http://localhost:3000/api/auth/register',
      method: 'post',
      data: {
        ...payload,
        isAdmin: false,
        wrongPass: 0,
      },
    })
      .then(() => dispatch(loginRequest(payload)))
      .catch((err) => dispatch(setHistoricalIpcError(err)));
  };
};

