import PostsList from './components/PostsList';
import SelectedPosts from './components/SelectedPosts';

const App = () => {
  return (
    <div>
      <h3>Selected Posts</h3>
      <SelectedPosts />

      <hr />

      <h3>All Posts</h3>
      <PostsList />
    </div>
  );
};

export default App;
