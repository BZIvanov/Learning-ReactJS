import { useIsItTimeRange } from "./useIsInTimeRange";

const App = () => {
  const isInRange = useIsItTimeRange({
    startDateRange: "2025-05-05",
    endDateRange: "2025-07-17",
  });

  return <div>{isInRange ? "In range" : "Not in range"}</div>;
};

export default App;
