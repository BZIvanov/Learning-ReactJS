import { configureStore } from "@reduxjs/toolkit"; // 2.8.2

import counterReducer from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
