# Key concept: Who owns the render?

React re-renders from the component whose state changed downward.

## Good Example component

**What happens here?**

- Counter just receives `HeavyComponent` as a prop (children)
- When `count` changes:
  - `Counter` re-renders
  - `children` is the same React element reference
  - React sees: _“This subtree didn’t change”_
  - ✅ `HeavyComponent` **does NOT re-render**

**Why?**

Because `HeavyComponent` is **not recreated** when `Counter` updates.

## Bad Example component

**What happens here?**

- `HeavyComponent` is created inside `Counter`
- When `count` changes:
  - `Counter` re-renders
  - JSX is re-executed
  - `HeavyComponent` is recreated
  - ❌ `HeavyComponent` **re-renders every click**

## Summary Table

| Pattern                            | HeavyComponent re-renders? | Performance |
| ---------------------------------- | -------------------------- | ----------- |
| Passed as `children`               | ❌ No                      | ✅ Best     |
| Rendered inside stateful component | ✅ Yes                     | ❌ Worse    |

## Additional info

Context providers behave very similarly to the children pattern shown in this demo. Children only re-render if they actually consume the context value.
