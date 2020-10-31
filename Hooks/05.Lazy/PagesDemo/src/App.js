import { Suspense, lazy, useState } from 'react';
import './App.css';
import Page1 from './components/Page1';

const Page2Lazy = lazy(() => import('./components/Page2'));
const Page3Lazy = lazy(() => import('./components/Page3'));

function App() {
  const [route, setRoute] = useState('page1');

  const onRouteChange = (route) => {
    setRoute(route);
  };

  if (route === 'page1') {
    return <Page1 onRouteChange={onRouteChange} />;
  } else if (route === 'page2') {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Page2Lazy onRouteChange={onRouteChange} />
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Page3Lazy onRouteChange={onRouteChange} />
      </Suspense>
    );
  }
}

export default App;
