import { ActionType } from '../action-types';
import { Action } from '../actions';

const initialState = 0;

const reducer = (state: number = initialState, action: Action): number => {
  switch (action.type) {
    case ActionType.INCREASE:
      return state + action.payload;
    case ActionType.DECREASE:
      return state - action.payload;
    case ActionType.RESET:
      return 0;
    default:
      return state;
  }
};

export default reducer;
