import React from 'react';
import ReactDOM from 'react-dom';
// createStore is a method which we need to create the store
import { createStore } from 'redux';
// we need the Provider to make the connection between our app and redux
import { Provider } from 'react-redux';

import App from './App';
// here will be our reducer logic which is updating the store
import reducer from './store/reducer';


// we create the store before our application and provide the reducer
const store = createStore(reducer);

// with Provider wrapping our App now we have access to the store in our App
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
