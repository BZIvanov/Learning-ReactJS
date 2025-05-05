# useMemo hook

`useMemo` memoizes a value so **it only recalculates when its dependencies change**. It's useful for avoiding unnecessary recalculations of expensive operations.

When using `useMemo`, be cautious with **reference-type dependencies** such as objects, arrays, or functions. These are compared by reference, not by value—so even if two arrays look the same (`[1, 2, 3]`), they’re different if created anew on each render. This can cause useMemo to recompute unnecessarily. To prevent this, ensure reference-type dependencies are either memoized themselves (using `useMemo` or `useCallback`) or declared outside the component when they don't need to change.

## Content of this section

1. basic-usage
