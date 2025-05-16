import { Outlet } from "react-router";

import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation />

      <Outlet />
    </>
  );
};

export default App;
