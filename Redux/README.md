# Redux

## Core points in Redux

- **Store** - the data described as single source of truth
- **Reducer** - reducer is function updating the store. Reducer function takes 2 arguments, the first is the current state and the second is the action and it will return the updated state. In the reducer we can't run asynchronous code
- **Dispatching Action** - dispatch is used on the store. It is a function which takes 1 argument, javascript object with type of action.
- **Subscription** - subscription is used to get notified when the store is updated, we dont do that manually. We do it by using subscribe method on the store.

## Redux DevTools (Chrome extension)

Install the **Redux DevTools** for Chrome to easier work with redux in the browser.

### trace

`trace` is a **feature in the Redux DevTools Extension** that allows you to **see the exact stack trace** of where a Redux action was dispatched in your code. In other words: it shows _which file, function, and even line number_ triggered an action — directly in the DevTools UI.

#### What it looks like in DevTools

When `trace` is enabled:

1. You dispatch an action (manually or via some UI logic).
2. In the **Actions** tab of Redux DevTools:
   - Select the action.
   - A `Trace` tab will appear (or a "Stack Trace" panel).
   - You'll see a clickable stack trace (file names, line numbers).

Clicking an entry can jump you straight into your editor (if DevTools integration is configured).

#### ⚠️ Things to keep in mind

- `trace` is a **development-only feature** — it should never be enabled in production.
- Tracing may slightly affect performance when many actions are dispatched rapidly.
- If you're using anonymous functions or arrow functions inside components, the trace might be less readable.

## Content of this section

- **Legacy** - legacy usage of Redux (OPTIONAL section)
- **Saga** - using Redux with sagas
- **Toolkit** - the more modern and recommended way of using Redux
