import { actionType } from '../action-types';
import { LOCALES } from '../../i18n/constants';

const initialState = LOCALES.ENGLISH;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
