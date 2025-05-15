import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { getPosts, selectPosts } from "../store/posts/postsSlice";

const Posts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useAppSelector(selectPosts);
  // we could also create selectors for isLoading and error if we use them in many places
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const error = useAppSelector((state) => state.posts.error);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
};

export default Posts;
