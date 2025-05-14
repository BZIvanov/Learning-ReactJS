# Legacy Redux

## from 'redux'

- **createStore** - core function which let us create the store for the app
- **combineReducers** - it let us use more than one reducers. Using more than one use useful to separate reducers based on different things they handle
- **applyMiddleware** - it let us to use our created middlewares. If we have more than one middlewares we just specify all separated with comma.
- **compose** - we are using it in case our chrome extension is not found, so our app can still continue to work.
