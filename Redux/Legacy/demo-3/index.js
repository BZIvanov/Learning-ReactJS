import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'; // react-redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; // 4.1.1
// thunk has default export so no curly brackets needed
import thunk from 'redux-thunk'; // 2.3.0
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

// here is how we combine more than one reducers
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

// simple example of middleware. We get all the functions ready from redux we dont call them
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    };
  };
};

// composeEnhancers is needed for our google chrome redux extension
// here we want to use custom enhancer with Chrome and if we dont have Chrome extension installed we will fall back for the basic compose provided by redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// logger is our custom middleware and thunk is installed one used for handling async code
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
