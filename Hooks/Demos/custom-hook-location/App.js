import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
import useLocation from './custom-hooks/useLocation';

function App() {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message='Please accept location request' />;
  }

  return <div>{content}</div>;
}

export default App;
