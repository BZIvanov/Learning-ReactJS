import * as actionTypes from '../actions/action-types';

const initialState = {
  loading: false,
  rooms: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ROOMS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.GET_ROOMS_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: action.payload,
        error: null,
      };
    case actionTypes.GET_ROOMS_FAIL:
      return {
        ...state,
        loading: false,
        rooms: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
