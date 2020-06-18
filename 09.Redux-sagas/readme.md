## SAGA

### effects

- takeEvery - the first parameter is the action we want to dispatch, the second parameter is the generator function to run. Everytime from the store is dispatched the action specified as first parameter, the generator as second parameter will be executed.

- take - it will dispatch the provided action only once even if we call it multiple times. The only parameter is the type of action we want to dispatch

- call - usually used after take. The first parameter is the function we want to run, the next parameter is the arguments we want to provide to the function as first parameter.

- put - allows us to dispatch actions
