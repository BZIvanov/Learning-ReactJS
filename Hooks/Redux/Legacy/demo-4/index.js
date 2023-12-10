import React from 'react'; // 17.0.2
import ReactDOM from 'react-dom'; // 17.0.2
import { Provider } from 'react-redux'; // 7.2.4

import { store } from './store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
