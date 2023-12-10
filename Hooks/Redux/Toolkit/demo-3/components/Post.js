import { Link, useParams } from 'react-router-dom';

import { useGetPostQuery } from '../features/postsApi/postsApiSlice';

function Posts() {
  const { postId } = useParams();

  const { data: post, isLoading, isError, error } = useGetPostQuery(postId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.error}</p>;
  }

  return (
    <div>
      <p>{post.title}</p>
      <Link to={`/`}>Back to Posts</Link>
    </div>
  );
}

export default Posts;
