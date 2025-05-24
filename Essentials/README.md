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

## Events

Click [here](https://reactjs.org/docs/events.html#supported-events) for a list of events you can use

## Environment variables

For details read [DOCS](https://create-react-app.dev/docs/adding-custom-environment-variables/).

To use global variables create .env file. Every variable name must start with **REACT_APP**. So actual global variable will look like _REACT_APP_API_KEY_. And to access the variable in the app, use it like this _process.env.REACT_APP_API_KEY_.

If you want to use global variables in your index.html you have to put the variable name in percent signs. Here is example **%REACT_APP_API_KEY%**.

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
