import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";
import { postsApi } from "./postsApi";

export interface PostsState {
  totalCount: number;
}

const initialState: PostsState = {
  totalCount: 0,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // we have two endpoints getPosts and getPost, the name below should match whichever endpoint we want to use
    builder.addMatcher(
      postsApi.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        state.totalCount = action.payload.length;
      }
    );
  },
});

export const selectPostsCount = (state: RootState) => state.posts.totalCount;

export default postsSlice.reducer;
