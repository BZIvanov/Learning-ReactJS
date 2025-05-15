import { api } from "../api";
import type { Post } from "./postsTypes";

export const postsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
    getPost: build.query<Post, number>({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "GET",
      }),
    }),
  }),
});

// use + getPosts (capitalized) + Query -> the pattern to create the variable names
export const { useGetPostsQuery, useGetPostQuery } = postsApi;
