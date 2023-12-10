import { configureStore } from '@reduxjs/toolkit'; // 2.0.1
import {
  useDispatch as useAppDispatch,
  useSelector as useTypedSelector,
} from 'react-redux'; // 9.0.2

import { apiSlice } from '../features/api/apiSlice';

export const createStore = (options = {}) => {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
    ...options,
  });
};

export const useDispatch = useAppDispatch;
export const useSelector = useTypedSelector;
