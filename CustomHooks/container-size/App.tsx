import { useContainerSize } from "./useContainerSize";

const App = () => {
  const [sides, ref] = useContainerSize();

  return (
    <div ref={ref} style={{ border: "1px solid black" }}>
      <div>Width: {sides.width}</div>
      <div>Height: {sides.height}</div>
    </div>
  );
};

export default App;
