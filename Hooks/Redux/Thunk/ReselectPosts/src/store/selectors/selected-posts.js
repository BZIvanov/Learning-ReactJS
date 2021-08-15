import { createSelector } from 'reselect';

const postsSelector = (state) => state.posts.posts;
const selectedPostsSelector = (state) =>
  state.selectedPostsIds.selectedPostsIds;

const getPosts = (posts, selectedPostsIds) => {
  return posts.filter((post) => selectedPostsIds.includes(post.id));
};

// the last argument will receive the previous arguments as his own arguments
export default createSelector(postsSelector, selectedPostsSelector, getPosts);
