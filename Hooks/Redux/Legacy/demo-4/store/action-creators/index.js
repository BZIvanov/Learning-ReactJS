import axios from 'axios';
import { actionType } from '../action-types';

const fetchStart = () => ({ type: actionType.FETCH_TODOS_START });

const fetchSuccess = (data) => ({
  type: actionType.FETCH_TODOS_SUCCESS,
  payload: data,
});

const fetchFail = (message) => ({
  type: actionType.FETCH_TODOS_FAIL,
  payload: message,
});

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(fetchStart());

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      dispatch(fetchSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail('Something went wrong'));
    }
  };
};
