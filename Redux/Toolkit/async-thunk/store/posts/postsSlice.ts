import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type { RootState } from "../types";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  id: number;
  title: string;
};

export interface PostsState {
  isLoading: boolean;
  error: string | null;
  posts: Post[];
}

const initialState: PostsState = {
  isLoading: false,
  error: null,
  posts: [],
};

export const getPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue("Failed to fetch posts");
      }

      return data as Post[];
    } catch (error) {
      let message = "Failed to fetch posts";
      if (error instanceof Error) {
        message = error.message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.isLoading = false;
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        // the payload is whatever we provided to rejectWithValue
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export const selectPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
