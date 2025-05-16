import { Routes, Route } from "react-router";

import App from "../App";
import Home from "../components/Home";
import Greeting from "../components/Greeting";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="greeting" element={<Greeting />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
