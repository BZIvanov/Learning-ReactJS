import { BrowserRouter } from "react-router";

import AppRoutes from "./AppRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default AppRouter;
