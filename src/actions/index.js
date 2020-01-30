/* eslint-disable import/prefer-default-export */

export const getHistoricalIpcList = (payload) => {
  return ({
    type: 'GET_HISTORICAL_IPC_LIST',
    payload,
  });
};

export const getHistoricalIpcError = (payload) => {
  return ({
    type: 'GET_HISTORICAL_IPC_ERROR',
    payload,
  });
};
