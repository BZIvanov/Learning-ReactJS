import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'; // 1.6.2

const initialState = {
  isLoading: false,
  error: '',
  posts: [],
};

const url = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (data, thunkAPI) => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const counterSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        // the payload is whatever we provided to rejectWithValue
        state.error = action.payload;
      });
  },
});

export default counterSlice.reducer;

export const selectPostsList = (state) => state.posts.posts;
