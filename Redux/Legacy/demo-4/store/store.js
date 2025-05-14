import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk'; // 2.3.0

import reducers from './reducers';
import validateState from './custom-middlewares/validate-state';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk, validateState))
);
