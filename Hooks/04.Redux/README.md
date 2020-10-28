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

