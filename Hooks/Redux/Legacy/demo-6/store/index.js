import { createStore, applyMiddleware, compose } from 'redux'; // 4.1.1
import thunk from 'redux-thunk'; // 2.3.0

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
