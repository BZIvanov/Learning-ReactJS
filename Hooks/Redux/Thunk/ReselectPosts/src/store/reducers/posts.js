import {
  REQUEST_POSTS_LOADING,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAIL,
} from '../action-types';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const posts = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_POSTS_LOADING:
      return Object.assign({}, state, { isLoading: true });
    case REQUEST_POSTS_SUCCESS:
      return Object.assign({}, state, {
        posts: action.payload,
        isLoading: false,
      });
    case REQUEST_POSTS_FAIL:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
