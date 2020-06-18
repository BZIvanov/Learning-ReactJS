import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header';
import ImageGrid from './components/image-grid';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ImageGrid />
    </Provider>
  );
}

export default App;
