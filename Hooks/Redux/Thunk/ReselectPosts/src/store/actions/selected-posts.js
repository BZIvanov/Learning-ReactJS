import { TOGGLE_SELECT_POST } from '../action-types';

export const selectPost = (id, isSelected) => (dispatch) => {
  dispatch({ type: TOGGLE_SELECT_POST, payload: { id, isSelected } });
};
