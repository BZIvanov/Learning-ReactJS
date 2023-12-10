import { Link } from 'react-router-dom';

import { useGetPostsQuery } from '../../app/services/posts';
import { useSelector } from '../../app/store';
import { selectPostsCount } from './postsSlice';

function Posts() {
  const { data: posts, isLoading, isError, error } = useGetPostsQuery();

  const postsTotalCount = useSelector(selectPostsCount);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.error}</p>;
  }

  return (
    <>
      <p>Posts count: {postsTotalCount}</p>

      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Posts;
