import React from 'react'; // 17.0.1
import ReactDOM from 'react-dom'; // 17.0.1
import { createStore, combineReducers, applyMiddleware } from 'redux'; // 4.0.5
import { Provider } from 'react-redux'; // 7.2.2
import thunkMiddleware from 'redux-thunk'; // 2.3.0
import { createLogger } from 'redux-logger'; // 3.0.6

import App from './containers/App';
import { requestRobots, searchRobots } from './store/reducers';

const logger = createLogger();

const rootReducers = combineReducers({ requestRobots, searchRobots });

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
