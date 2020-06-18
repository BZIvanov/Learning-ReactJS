import {
  IMAGES_LOAD,
  IMAGES_LOAD_SUCCESS,
  IMAGES_LOAD_FAIL,
} from '../constants';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case IMAGES_LOAD:
      return true;
    case IMAGES_LOAD_SUCCESS:
      return false;
    case IMAGES_LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
