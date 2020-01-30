const initialState = {
  historicalIpcList: [],
  openingIpcValue: undefined,
  maximumIpcValue: undefined,
  minimumIpcValue: undefined,
  closingIpcValue: undefined,
  currentIpcValue: undefined,
  user: {},
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_HISTORICAL_IPC_LIST': {
      const result = {
        ...state,
        historicalIpcList: action.payload,
      };

      return result;
    };

    case 'SET_HISTORICAL_IPC_ERROR': {
      const result = {
        ...state,
        error: action.payload,
      };
      return result;
    };

    case 'SET_INDICATORS_MARKET_IPC': {
      const result = {
        ...state,
        openingIpcValue: action.payload.opening,
        maximumIpcValue: action.payload.maximum,
        minimumIpcValue: action.payload.minimum,
        closingIpcValue: action.payload.closing,
        currentIpcValue: action.payload.current,
      };
      return result;
    };

    case 'LOGIN_USER': {
      const result = {
        ...state,
        user: action.payload,
      };
      return result;
    };

    default:
      return state;
  };
};

export default reducer;
