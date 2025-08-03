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

## Reconciliation

**Reconciliation** is the **process React uses to determine what has changed in the UI** and **update the DOM efficiently**.

When your component’s state or props change, React:

1. Renders a new **React Element tree** (i.e. a description of the UI).
2. Compares it with the **previous element tree**.
3. Determines the **minimum number of changes** needed to update the actual DOM.
4. Applies those changes.

This process is optimized for **performance** and is central to React’s **virtual DOM** model.

---

### How it works?

1. **You write JSX** and React creates a **React Element**.
2. On an update (e.g., `setState` or prop change), React:
   - Calls the component again to get the new tree.
   - **Compares** the new tree to the previous one.
3. React uses a **diffing algorithm** to identify:
   - Which elements can be reused
   - Which need to be removed, added, or updated
4. React updates the **actual DOM** based on this diff.

---

### Optimizations in React’s Reconciliation Algorithm

React uses **heuristics** to make reconciliation fast:

- **Elements with the same type** (e.g. `<div>` → `<div>`) are **reused**.
- **Keys** help React match elements in lists for efficient updates.
- React **does not deeply diff trees**; instead, it makes assumptions:
  - Different component types → unmount + remount.
  - Same component type → props/state diff + update.

---

### 🧠 Summary Table

| Term            | Description                                                       |
| --------------- | ----------------------------------------------------------------- |
| Reconciliation  | The process of diffing and updating the UI in response to changes |
| Virtual DOM     | React’s in-memory representation of the UI                        |
| Diffing         | Comparing old and new trees to find minimal changes               |
| Key (in lists)  | Helps React track elements across updates for better performance  |
| Concurrent Mode | Allows React to pause/resume rendering work                       |

## What Is React Fiber?

**Fiber** is the **reimplementation of React’s reconciliation algorithm**, introduced in **React 16**.

It is **not a separate concept**, but the **core engine** that **enables modern reconciliation features** like:

- Interruptible rendering (Concurrent Mode)
- Scheduling updates with different priorities
- Pausing and resuming rendering
- Better error handling and recovery
- Hooks

React Fiber replaces the older "stack-based" reconciler (used in React ≤15) with a **linked-list tree structure** that gives React **fine-grained control** over the rendering process.

---

## Fiber and Reconciliation: The Connection

- **Reconciliation** is the _process_.
- **Fiber** is the _implementation of that process_.

When React reconciles two trees (old and new), it walks through **Fiber nodes** — which are JavaScript objects representing elements in the UI tree — and determines what to update.

Each **Fiber node** contains:

- The component/function
- Its props/state
- Pointers to child/sibling/parent fibers
- Metadata for scheduling (e.g., priority)

> So, reconciliation is the _strategy_, and Fiber is the _data structure and engine_ used to carry it out.

---

## Why Fiber Matters

React heavily relies on Fiber to enable:

- **Concurrent rendering**: React can pause and resume work at will.
- **Selective hydration** in React Server Components.
- **Transitions** (`useTransition`) that defer work without blocking user interactions.
- **Rendering prioritization**: urgent vs background updates.

Without **Fiber**, none of this would be possible — it gives React the ability to **render asynchronously**, **break work into units**, and **optimize updates** for modern web performance needs.

---

## Summary Table: Fiber vs Reconciliation

| Term               | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| **Reconciliation** | The process of comparing React trees to update the UI                     |
| **Fiber**          | The internal engine/data structure React uses to implement reconciliation |

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
