import { useGetPostQuery } from "../store/posts/postsApi";

function Post({ postId }: { postId: number }) {
  const { data: post, isFetching, isError } = useGetPostQuery(postId);

  if (isFetching) {
    return <p>Fetching post...</p>;
  }

  if (isError) {
    return <p>Something went wrong with the selected post</p>;
  }

  return (
    <div>
      <p>
        {post?.id} - {post?.title}
      </p>
    </div>
  );
}

export default Post;
