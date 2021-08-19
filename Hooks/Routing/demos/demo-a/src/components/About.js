import { useLocation, useHistory } from 'react-router-dom';

const About = () => {
  // we can use history methods to achieve some behavior
  const location = useLocation();
  const history = useHistory();

  return (
    <div>
      <h3>About page</h3>
      <p>
        My location is <b>{location.pathname}</b>
      </p>
      <button
        // here we also provide the state, because we use it on the Home components
        onClick={() => history.push({ pathname: '/', state: { userId: 2 } })}
      >
        Back to Home
      </button>
    </div>
  );
};

export default About;
