import { connect } from 'react-redux';
import selectedPostsSelector from '../store/selectors/selected-posts';

// with the selector we combined the desired result of 2 different reducers without creating another piece of reducer
const SelectedPosts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: selectedPostsSelector(state),
  };
};

export default connect(mapStateToProps)(SelectedPosts);
