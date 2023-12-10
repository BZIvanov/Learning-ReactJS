import { combineReducers } from 'redux';

import { posts } from './posts';
import { selectedPostsIds } from './selected-posts';

const rootReducer = combineReducers({
  posts,
  selectedPostsIds,
});

export default rootReducer;
