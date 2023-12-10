import axios from '../../api';
import {
  REQUEST_POSTS_LOADING,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAIL,
} from '../action-types';

export const requestPosts = () => async (dispatch) => {
  dispatch({ type: REQUEST_POSTS_LOADING });
  try {
    const { data } = await axios.get('/posts');
    dispatch({ type: REQUEST_POSTS_SUCCESS, payload: data.slice(0, 10) });
  } catch (error) {
    dispatch({ type: REQUEST_POSTS_FAIL, payload: error });
  }
};
