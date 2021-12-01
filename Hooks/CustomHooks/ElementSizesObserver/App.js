import useContainerSize from './useContainerSize';

const App = () => {
  const [sides, ref] = useContainerSize();

  return (
    <div ref={ref}>
      <div>{sides.width}</div>
    </div>
  );
};

export default App;
