import { apiSlice } from '../api/apiSlice';

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: '/posts',
        keepUnusedDataFor: 5,
      }),
    }),
    getPost: builder.query({
      query: (postId) => ({
        url: `/posts/${postId}`,
        keepUnusedDataFor: 5,
      }),
    }),
  }),
});

// use + getPosts (capitalized) + Query -> the pattern to create the variable names
export const { useGetPostsQuery, useGetPostQuery } = postsApiSlice;
