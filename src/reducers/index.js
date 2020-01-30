const initialState = {
  historicalIpcList: [],
  openingIpcValue: undefined,
  maximumIpcValue: undefined,
  minimumIpcValue: undefined,
  closingIpcValue: undefined,
  user: {},
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_HISTORICAL_IPC_LIST': {
      const result = {
        ...state,
        historicalIpcList: action.payload,
      };

      return result;
    };

    case 'GET_HISTORICAL_IPC_ERROR': {
      const result = {
        ...state,
        error: action.payload,
      };
      return result;
    };

    default:
      return state;
  };
};

export default reducer;
