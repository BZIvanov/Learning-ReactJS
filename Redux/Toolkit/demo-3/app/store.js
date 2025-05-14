import { configureStore } from '@reduxjs/toolkit'; // 2.0.1
import {
  useDispatch as useAppDispatch,
  useSelector as useTypedSelector,
} from 'react-redux'; // 9.0.2

import { api } from './services/api';
import posts from '../features/posts/postsSlice';

export const createStore = (options = {}) => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      posts,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    devTools: process.env.NODE_ENV !== 'production',
    ...options,
  });
};

export const useDispatch = useAppDispatch;
export const useSelector = useTypedSelector;
