import React from 'react'; // 17.0.2
import ReactDOM from 'react-dom'; // 17.0.2
// we need the Provider to make the connection between our app and redux
import { createStore } from 'redux'; // 4.1.1
import { Provider } from 'react-redux'; // 7.2.4

import App from './App';
import reducer from './store/reducer';

// we create the store before our application and provide the reducer
const store = createStore(reducer);

// with Provider wrapping our App now we have access to the store in our App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
