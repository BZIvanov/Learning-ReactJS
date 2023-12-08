import { applyMiddleware, createStore } from 'redux'; // 4.1.1
import thunk from 'redux-thunk'; // 2.3.0

import reducers from './reducers';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
