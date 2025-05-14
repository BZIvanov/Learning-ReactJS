# Redux

## Core points in Redux

- **Store** - the data described as single source of truth
- **Reducer** - reducer is function updating the store. Reducer function takes 2 arguments, the first is the current state and the second is the action and it will return the updated state. In the reducer we can't run asynchronous code
- **Dispatching Action** - dispatch is used on the store. It is a function which takes 1 argument, javascript object with type of action.
- **Subscription** - subscription is used to get notified when the store is updated, we dont do that manually. We do it by using subscribe method on the store.

## Using with Chrome

Install the **Redux DevTools** for Chrome to easier work with redux in the browser.

## Content of this section

- **Legacy** - legacy usage of Redux (OPTIONAL section)
- **Saga** - using Redux with sagas
- **Toolkit** - the more modern and recommended way of using Redux
