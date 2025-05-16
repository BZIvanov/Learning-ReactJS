import { Routes, Route } from "react-router";

import App from "../App";
import Home from "../components/Home";
import About from "../components/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
