/* eslint-disable import/prefer-default-export */

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
