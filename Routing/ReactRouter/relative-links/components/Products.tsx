import { Link } from "react-router";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/products/product1">Product 1</Link>
        <Link to="/products/product2">Product 2</Link>
      </div>
    </div>
  );
};

export default Products;
