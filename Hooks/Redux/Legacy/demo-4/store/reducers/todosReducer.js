import { actionType } from '../action-types';

const initialState = {
  todos: [],
  loading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_TODOS_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case actionType.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case actionType.FETCH_TODOS_FAIL:
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
