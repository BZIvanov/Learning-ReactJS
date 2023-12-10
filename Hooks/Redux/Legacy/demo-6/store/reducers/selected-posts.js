import { TOGGLE_SELECT_POST } from '../action-types';

const initialState = {
  selectedPostsIds: [],
};

export const selectedPostsIds = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SELECT_POST:
      let updatedIds = [...state.selectedPostsIds];
      if (action.payload.isSelected) {
        updatedIds.push(action.payload.id);
      } else {
        updatedIds = updatedIds.filter((id) => id !== action.payload.id);
      }
      return Object.assign({}, state, { selectedPostsIds: updatedIds });
    default:
      return state;
  }
};
