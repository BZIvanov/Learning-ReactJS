import { api } from './api';

export const postsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({
        url: '/posts',
        method: 'GET',
        keepUnusedDataFor: 5,
      }),
    }),
    getPost: build.query({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: 'GET',
        keepUnusedDataFor: 5,
      }),
    }),
  }),
});

// use + getPosts (capitalized) + Query -> the pattern to create the variable names
export const { useGetPostsQuery, useGetPostQuery } = postsApi;
