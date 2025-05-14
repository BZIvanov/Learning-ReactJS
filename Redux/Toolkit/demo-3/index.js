import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom'; // 6.20.1

import { createStore } from './app/store';
import { router } from './app/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore()}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
