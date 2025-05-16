import { useParams } from "react-router";

import Product1 from "./Product1";
import Product2 from "./Product2";

const ProductDetails = () => {
  const { productId } = useParams();

  if (productId === "product1") return <Product1 />;
  if (productId === "product2") return <Product2 />;

  return <div>Product not found</div>;
};

export default ProductDetails;
