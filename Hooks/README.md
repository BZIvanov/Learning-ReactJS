# React Hooks

## Hooks rules

- Hooks have to be placed on the top level of the component, not nested in something. For example do not use in another function or in a if statement.
- Custom hooks - naming must always start with `use...`. Custom hooks work in a way that they provide us with our custom logic, meaning that every component using our custom hook gets individual snapshot of the hook, so using the same hook it is different for each component.
