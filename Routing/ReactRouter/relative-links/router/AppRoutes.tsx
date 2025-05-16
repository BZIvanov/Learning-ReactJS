import { Routes, Route } from "react-router";

import App from "../App";
import Home from "../components/Home";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
