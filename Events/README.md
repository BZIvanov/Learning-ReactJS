# Events

React uses its own **event system** built on top of the browser's native DOM events. It wraps browser events inside a cross-browser wrapper known as a **Synthetic Event**.

Click [here](https://reactjs.org/docs/events.html#supported-events) for a list of events you can use.

## What is a Synthetic Event?

A **SyntheticEvent** is React’s **cross-browser wrapper** around the native browser event.

It provides a consistent API across all browsers and normalizes event behavior so you don’t have to worry about differences between, say, Firefox and Chrome.

You can access most of the usual properties like `event.target`, `event.type`, `event.preventDefault()`, etc.

> **Note:** React 19 introduces support for **native event objects** in some contexts, but Synthetic Events are still used in most cases for performance and consistency.

## Where are events attached?

React uses **event delegation**.

- Instead of attaching event handlers directly to DOM nodes, React **attaches a single event listener to the root of the DOM tree** (like the `<div id="root">`).
- When an event occurs, it **bubbles up** to this root listener.
- React then determines which component's event handler to call.

This enables:

- Efficient updates
- Centralized control
- Lower memory usage

## Example: basic event handling

```jsx
function MyButton() {
  const handleClick = (event) => {
    event.preventDefault(); // This is a synthetic event
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

## Synthetic vs Native

```jsx
function Demo() {
  const handleClick = (event) => {
    console.log(event instanceof SyntheticEvent); // true
    console.log(event.nativeEvent instanceof Event); // true
  };

  return <div onClick={handleClick}>Test</div>;
}
```
