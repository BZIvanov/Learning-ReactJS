import { Link } from 'react-router-dom';

import { useGetPostsQuery } from '../features/postsApi/postsApiSlice';

function Posts() {
  const { data: posts, isLoading, isError, error } = useGetPostsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.error}</p>;
  }

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Link to={`/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Posts;
