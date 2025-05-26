import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const url = "https://jsonplaceholder.typicode.com";

const baseQuery = fetchBaseQuery({
  baseUrl: url,
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const api = createApi({
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
  tagTypes: ["Post"],
});
