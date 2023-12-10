import { createBrowserRouter } from 'react-router-dom';

import Posts from '../components/Posts';
import Post from '../components/Post';

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
