import { configureStore } from "@reduxjs/toolkit";

import { api } from "./api";
import postsReducer from "./posts/postsSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
