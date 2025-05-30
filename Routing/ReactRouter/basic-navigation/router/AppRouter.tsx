import { BrowserRouter } from "react-router"; // 7.6.0

import AppRoutes from "./AppRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default AppRouter;
