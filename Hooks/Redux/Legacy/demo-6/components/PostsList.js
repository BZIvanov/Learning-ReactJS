import { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestPosts } from '../store/actions/posts';
import Post from './Post';

const PostsList = ({ posts, requestPosts }) => {
  useEffect(() => {
    requestPosts();
  }, [requestPosts]);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps, { requestPosts })(PostsList);
