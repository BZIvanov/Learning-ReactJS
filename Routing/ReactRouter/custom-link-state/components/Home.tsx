import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={() =>
          navigate("/greeting", {
            state: { greetingText: "hello" },
          })
        }
      >
        Check greeting
      </button>
    </div>
  );
};

export default Home;
