import { actionType } from '../action-types';

export const setAuth = (isAuthenticated) => {
  return (dispatch) => {
    dispatch({
      type: actionType.TOGGLE_AUTH,
      payload: isAuthenticated,
    });
  };
};
