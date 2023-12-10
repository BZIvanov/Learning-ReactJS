import { createBrowserRouter } from 'react-router-dom';

import Posts from '../features/posts/Posts';
import Post from '../features/posts/Post';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Posts />,
  },
  {
    path: '/:postId',
    element: <Post />,
  },
]);
