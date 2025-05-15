import { useState } from "react";

import { useAppSelector } from "../store/hooks";
import { useGetPostsQuery } from "../store/posts/postsApi";
import { selectPostsCount } from "../store/posts/postsSlice";
import Post from "./Post";

const Posts = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const { data: posts, isLoading, isError } = useGetPostsQuery();

  const postsTotalCount = useAppSelector(selectPostsCount);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong with posts</p>;
  }

  return (
    <>
      <h1>Posts count: {postsTotalCount}</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <ul>
          {posts?.map((post) => {
            return (
              <li key={post.id}>
                <button onClick={() => setSelectedPostId(post.id)}>
                  {post.id}
                </button>
              </li>
            );
          })}
        </ul>

        {selectedPostId && <Post postId={selectedPostId} />}
      </div>
    </>
  );
};

export default Posts;
