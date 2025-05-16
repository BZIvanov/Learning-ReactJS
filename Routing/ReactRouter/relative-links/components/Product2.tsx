import { Link } from "react-router";

const Product2 = () => {
  return (
    <div>
      <h1>Product 2</h1>

      <p>
        Link relative to path should return us back to{" "}
        <strong>Products Page</strong>
      </p>

      <Link to=".." relative="path">
        Back to Products page
      </Link>
    </div>
  );
};

export default Product2;
