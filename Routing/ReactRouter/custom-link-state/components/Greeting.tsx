import { Link, useLocation } from "react-router";

const Greeting = () => {
  const location = useLocation();

  const gretting = location.state?.greetingText;

  return (
    <div>
      <h1>Custom state greeting is: {gretting}</h1>

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Greeting;
