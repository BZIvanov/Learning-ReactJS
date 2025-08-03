# Essentials

Contains basic react learning examples. In this examples, we are using React v19 + TypeScript.

## Virtual DOM

The **Virtual DOM (VDOM)** is a **lightweight in-memory representation** of the actual DOM (Document Object Model) in the browser.

- It's a JavaScript object that mirrors the real DOM.
- React uses it to **track changes** before updating the real DOM.
- Updating the VDOM is **much faster** than manipulating the real DOM directly.

### How It Works – Step by Step

React uses a **diffing algorithm** to minimize expensive DOM operations. Here's how:

#### 1. Initial Render

- When your app loads, React creates a **Virtual DOM tree** that represents your UI.
- It then **renders** this tree to the actual DOM.

#### 2. Re-render on State/Prop Change

- When state or props change, React:
  - Builds a **new Virtual DOM** (representing the updated UI).
  - Compares it to the **previous Virtual DOM** (using a process called _reconciliation_).

#### 3. Diffing

- React compares the **new** and **old** Virtual DOMs node by node.
- It identifies what has changed — this is called the **"diff."**

#### 4. Efficient DOM Updates

- React updates **only the parts of the real DOM** that actually changed.
- This minimizes reflows, repaints, and boosts performance.

### Why not use the real DOM directly?

- The real DOM is **slow to update**, especially in large apps.
- Direct DOM manipulations cause:
  - Performance bottlenecks
  - Inconsistent UI states
- React's Virtual DOM improves performance by:

  - Reducing direct writes to the DOM
  - Batch processing changes
  - Skipping unnecessary updates

## React Element vs Component Instance

### React Element

- A **React Element** is a **plain JavaScript object** that describes what React should render.
- Created when you write JSX or call `React.createElement()`.
- Does **not** contain behavior — it's a **declarative description**.
- Think of it as a **lightweight blueprint**.

#### Example

```jsx
const element = <MyComponent someProp="hello" />;
```

This is **just data** — an object like:

```js
{
  type: MyComponent,
  props: { someProp: "hello" },
  // ...internal fields
}
```

React uses this to **know what to render**, but it hasn’t run any logic yet.

---

### Component Instance

A **component instance** refers to:

- The **invocation and execution** of your component function.
- The **hook state** and **lifecycle** managed internally by React.
- The "live" representation of the component during rendering and updates.

> Unlike in class components, **you don’t manually instantiate anything**. React does it behind the scenes when it _calls_ your function component.

#### Example

```jsx
function MyComponent({ someProp }) {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
}
```

Each time React renders `MyComponent`, it **creates or updates a component instance**:

- Runs the function
- Tracks `useState`, `useEffect`, etc.
- Handles effects and updates

---

### 🔄 Lifecycle in React (Function Component Flow)

1. JSX written:
   ```jsx
   <MyComponent someProp="hello" />
   ```
2. React creates a **React Element**:
   ```js
   { type: MyComponent, props: { someProp: 'hello' } }
   ```
3. React renders it by:
   - **Calling the function** (`MyComponent`)
   - Creating a **component instance internally**
   - Tracking hooks/state/effects

---

### 🧠 Summary Table

| Feature           | React Element                  | Component Instance                                  |
| ----------------- | ------------------------------ | --------------------------------------------------- |
| What is it?       | A plain object describing UI   | The execution + internal state of a component       |
| Created by        | JSX or `React.createElement()` | React calling the function component                |
| Is it live?       | No — it's just data            | Yes — manages state, hooks, rendering               |
| Mutable?          | No                             | Yes (internally, via hooks)                         |
| Has lifecycle?    | No                             | Yes (via hooks like `useEffect`, `useLayoutEffect`) |
| Role in rendering | Describes what to render       | Produces what to render                             |
| Tied to the DOM?  | Not directly                   | Yes — generates output React uses to update DOM     |

## Events

Click [here](https://reactjs.org/docs/events.html#supported-events) for a list of events you can use

## Environment variables

For details read [DOCS](https://create-react-app.dev/docs/adding-custom-environment-variables/).

To use global variables create `.env` file. Every variable name must start with **REACT_APP**. So actual global variable will look like `REACT_APP_API_KEY`. And to access the variable in the app, use it like this `process.env.REACT_APP_API_KEY`.

If you want to use global variables in your `index.html` you have to put the variable name in percent signs. Here is example `%REACT_APP_API_KEY%`.

And these variables don't provide security so you should never put sensitive information in these varibles on the front-end.

## Content

1. **basic-component** - very basic React component
2. **dynamic-values** - using dynamic values in a component
3. **custom-component** - using our own component. Also example of using `fragment`
4. **props** - providing component props
5. **children** - children prop. Also example of using `onClick` event
6. **conditional-styles** - using css styles conditionally and rendering list of items
7. **dynamic-element** - providing element as prop
8. **rendering-lists** - providing arrays as values to be rendered
