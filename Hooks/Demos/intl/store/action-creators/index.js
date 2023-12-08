import { actionType } from '../action-types';

export const setLanguage = (locale) => {
  return (dispatch) => {
    dispatch({
      type: actionType.SET_LANGUAGE,
      payload: locale,
    });
  };
};
