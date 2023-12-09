import { configureStore } from '@reduxjs/toolkit'; // 2.0.1
import {
  useDispatch as useAppDispatch,
  useSelector as useTypedSelector,
} from 'react-redux'; // 9.0.2

import counter from '../features/counter/counterSlice';

export const createStore = (options = {}) => {
  return configureStore({
    reducer: {
      counter,
    },
    devTools: process.env.NODE_ENV !== 'production',
    ...options,
  });
};

// reexport these hooks so we can have them easy for changes or refactoring if needed at some point
export const useDispatch = useAppDispatch;
export const useSelector = useTypedSelector;
