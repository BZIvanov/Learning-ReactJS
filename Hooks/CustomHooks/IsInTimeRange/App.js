import { useIsItTimeRange } from './useIsInTimeRange';

const App = () => {
  const isInRange = useIsItTimeRange({
    startDateRange: '2024-02-14',
    endDateRange: '2024-02-17',
  });

  console.log(isInRange);

  return <div>Hello</div>;
};

export default App;
