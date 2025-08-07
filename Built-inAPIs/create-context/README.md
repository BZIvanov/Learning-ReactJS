# createContext

## React Context vs Redux

- **React Context ≠ Redux**
- Context is for passing data down the component tree (dependency injection).
- Redux is for managing **global, complex app state**.
- Don't replace Redux with Context + useReducer unless the app is simple.

---

### What is React Context?

- Tool to avoid prop drilling.
- Good for static or rarely-changing values:
  - Theme
  - Auth info
  - Locale
- Not built for frequent state updates.

---

### What is Redux?

- Centralized, predictable state container.
- Built for:
  - Complex update logic
  - Cross-component shared state
  - Middleware (e.g. Thunks, Sagas)
  - DevTools (time-travel, logging)
  - Scalability & maintainability in large apps

---

### Core Differences

| Feature        | React Context                    | Redux                             |
| -------------- | -------------------------------- | --------------------------------- |
| Purpose        | Prop drilling avoidance          | Full state management             |
| Performance    | Triggers full subtree re-renders | Fine-grained subscriptions        |
| Built-in Tools | None                             | DevTools, middleware, persistence |
| Scalability    | Limited                          | High                              |
| Debugging      | Manual/limited                   | Excellent via Redux DevTools      |

---

## Why Redux is better than Context (In Some Cases)

- **Selective updates**: Redux components only re-render when the specific data they use changes.

### When to use what?

#### Use **Context** for:

- Theme, language, auth
- Local component tree state
- Small apps or isolated features

#### Use **Redux** for:

- Complex shared app state
- Frequent updates across components
- Team collaboration, large apps
- Need for advanced debugging/tooling

---

### Final Thought

> Context is a mechanism for passing values—not a state manager. Redux is purpose-built for managing complex app state with powerful tooling and patterns.

## Content of this section

1. **context-setup**
2. **context-setup-reducer**
