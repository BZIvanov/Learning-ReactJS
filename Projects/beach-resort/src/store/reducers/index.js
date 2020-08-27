import { combineReducers } from 'redux';
import roomsReducer from './rooms';
import filtersReducer from './filters';

const rootReducer = combineReducers({
  rooms: roomsReducer,
  filters: filtersReducer,
});

export default rootReducer;
