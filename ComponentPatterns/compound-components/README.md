# Compound components

Compound components are a **coordinated composition pattern** where multiple components are designed to work together and share implicit state.
Instead of passing props down manually, shared state is managed by a **parent component** and exposed to child components via **React Context**.

This pattern enables **declarative, expressive APIs** that feel natural to use.

## Why Use Compound Components?

Compound components are useful when:

- Multiple components are **conceptually linked**
- You want to avoid **prop drilling**
- You want consumers to compose UI flexibly
- The parent controls state, while children consume it implicitly

Common examples:

- Tabs
- Accordions
- Menus
- Dropdowns

## Key Characteristics

- A root component owns shared state
- Child components access state via context
- Children are not useful on their own
- The API reads like structured markup

## When to Avoid Compound Components

Avoid this pattern if:

- Components need to be used independently
- State relationships are weak or optional
- Simpler prop-based composition is sufficient
