import { combineReducers } from 'redux';
import amountReducer from './amountReducer';

const reducers = combineReducers({
  amount: amountReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
