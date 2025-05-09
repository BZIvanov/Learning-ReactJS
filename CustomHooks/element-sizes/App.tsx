import useElementRect from "./useElementRect";

const App = () => {
  const [parentElement, ref] = useElementRect();

  return (
    <div style={{ display: "flex" }}>
      <div ref={ref} style={{ flexGrow: 1, backgroundColor: "lightcoral" }}>
        <p>
          The distance is {Math.round(parentElement.width)}{" "}
          {parentElement.width > 300 ? "kilometers" : "kms"}
        </p>
      </div>
      <div style={{ backgroundColor: "lightcyan" }}>
        <p>Some random text</p>
      </div>
    </div>
  );
};

export default App;
