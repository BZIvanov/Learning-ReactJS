import { actionType } from '../action-types';

const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.TOGGLE_AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
