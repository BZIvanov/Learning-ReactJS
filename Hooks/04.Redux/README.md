# Redux

To use Redux we need to install it first. We do that by running

```
npm install --save redux
```

To make the connection between our application and Redux we also need to install react-redux package. Run the command:

```
npm install --save react-redux
```

## Core points in Redux

- Store -

- Reducer - reducer is the one updating the store. Reducer function takes 2 arguments, the first is the current state and the second is the action and it will return the updated state. In the reducer we cant run asynchronous code

- Dispatching Action - dispatch is used on the store. It is a function which takes 1 argument, javascript object with type of action.

- Subscription - subscription is used to get notified when the store is updated, we dont do that manually. We do it by using subscribe method on the store.

### Redux and Chrome

Install the Redux DevTools for Chrome to easier work with redux in the browser.
You will also have to use the composeEnhancers() method in the index.js file to let chrome know about the store.

### Thunk - Running async code

For async code we need to install redux-thunk. Run in the terminal

```
npm install --save redux-thunk
```

Thunk is actually an middleware.

### from 'redux'

- createStore - core function which let us create the store for the app

- combineReducers - it let us use more than one reducers. Using more than one use useful to separate reducers based on different things they handle

- applyMiddleware - it let us to use our created middlewares. If we have more than one middlewares we just specify all separated with comma.

- compose - we are using it in case our chrome extension is not found, so our app can still continue to work.
