import { Dispatch } from 'redux';

import { ActionType } from '../action-types';
import { Action } from '../actions';

export const increaseAmount = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INCREASE,
      payload: amount,
    });
  };
};

export const decreaseAmount = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DECREASE,
      payload: amount,
    });
  };
};

export const resetAmount = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESET,
    });
  };
};
