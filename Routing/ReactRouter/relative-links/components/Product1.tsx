import { Link } from "react-router";

const Product1 = () => {
  return (
    <div>
      <h1>Product 1</h1>

      <p>
        Link relative to route should return us back to{" "}
        <strong>Home Page</strong>
      </p>

      <Link to=".." relative="route">
        Back to Home page
      </Link>
    </div>
  );
};

export default Product1;
