import { createSlice } from '@reduxjs/toolkit';

import { postsApi } from '../../app/services/posts';

const initialState = {
  totalCount: 0,
};

const slice = createSlice({
  name: 'posts',
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

export default slice.reducer;

export const selectPostsCount = (state) => {
  console.log(state);
  return state.posts.totalCount;
};
