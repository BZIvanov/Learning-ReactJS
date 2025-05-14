# Redux SAGA

## effects

- **all** - allows us to use multiple sagas. The logic is similar to Promise.all
- **takeEvery** - the first parameter is the action we want to dispatch, the second parameter is the generator function to run. Everytime from the store is dispatched the action specified as first parameter, the generator as second parameter will be executed. _NON-BLOCKING_
  Basically we can have one type of action in different reducers, so this is a use case for takeEvery.
- **take** - it will dispatch the provided action only once even if we call it multiple times. The only parameter is the type of action we want to dispatch
- **put** - allows us to dispatch actions
- **select** - the parameter is a function which will receive the redux state as parameter to the function and allows us to take pieces of the state or the whole state, depending on our needs.
- **call** - the first parameter is the function we want to run, the next parameter is the arguments we want to provide to the function as first parameter.
- **fork** - similar to call, but it is non-blocking, so we can do another actions in paralel
