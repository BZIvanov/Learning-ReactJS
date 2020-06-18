import {
  IMAGES_LOAD,
  IMAGES_LOAD_SUCCESS,
  IMAGES_LOAD_FAIL,
} from '../constants';

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case IMAGES_LOAD_FAIL:
      return action.error;
    case IMAGES_LOAD:
    case IMAGES_LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
