import React from 'react';
// import BrowserRouter and wrap with it everything for which you want to have routing
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

const App = () => (
  // basename is useful in case of server rendering where our domain includes additional elements like /my-app so basically our domain will be something.com/my-app
  // <BrowserRouter basename="/my-app">
  <BrowserRouter>
    <Blog />
  </BrowserRouter>
);

export default App;
