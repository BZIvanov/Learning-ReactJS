import { Link } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "20px", listStyleType: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
