import { memo } from "react";

// memo will rerender this component only if the props are changed,
// and they will not change because we have the callback function in useCallback hook in the parent component
const Button = memo(({ onClick }: { onClick: () => void }) => {
  console.log("ChildButton re-rendered");

  return <button onClick={onClick}>Generate Random Number</button>;
});

export default Button;
