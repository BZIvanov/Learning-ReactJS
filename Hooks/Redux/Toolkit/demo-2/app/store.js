import { configureStore } from '@reduxjs/toolkit'; // 2.0.1
import {
  useDispatch as useAppDispatch,
  useSelector as useTypedSelector,
} from 'react-redux'; // 9.0.2

import posts from '../features/posts/postsSlice';

export const createStore = (options = {}) => {
  return configureStore({
    reducer: {
      posts,
    },
    devTools: process.env.NODE_ENV !== 'production',
    ...options,
  });
};

export const useDispatch = useAppDispatch;
export const useSelector = useTypedSelector;
