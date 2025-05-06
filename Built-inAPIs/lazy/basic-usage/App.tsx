import { Suspense, lazy, useState } from "react";

import Page1 from "./components/Page1";
import "./App.css";

const Page2Lazy = lazy(() => import("./components/Page2"));
const Page3Lazy = lazy(() => import("./components/Page3"));

const App = () => {
  const [route, setRoute] = useState<string>("page1");

  const onRouteChange = (route: string) => {
    setRoute(route);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {route === "page1" && <Page1 onRouteChange={onRouteChange} />}
      {route === "page2" && <Page2Lazy onRouteChange={onRouteChange} />}
      {route === "page3" && <Page3Lazy onRouteChange={onRouteChange} />}
    </Suspense>
  );
};

export default App;
