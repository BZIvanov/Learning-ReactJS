import React from 'react'; // 18.2.0
import ReactDOM from 'react-dom/client'; // 18.2.0
import { Provider } from 'react-redux'; // 9.0.2

import { createStore } from './app/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider
      // example of how we could pass preloadedState if we want to, which is usually useful for tests to provide some test state
      // store={createStore({ preloadedState: { counter: { value: 40 } } })}
      store={createStore()}
    >
      <App />
    </Provider>
  </React.StrictMode>
);
