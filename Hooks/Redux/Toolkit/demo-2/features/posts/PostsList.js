import { useEffect } from 'react';

import { useSelector, useDispatch } from '../../app/store';
import { getPosts, selectPostsList } from './postsSlice';

function PostsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector(selectPostsList);
  // we could also create selectors for isLoading and error if we use them in many places
  const isLoading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.error);

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
}

export default PostsList;
