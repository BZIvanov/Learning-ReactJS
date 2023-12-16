import { useLocation, useHistory } from 'react-router-dom';

const Home = () => {
  // in the Route for home components we provided additional state property and this is how we can access it
  const location = useLocation();
  const history = useHistory();

  console.log('useLocation', location);
  console.log('useHistory', history);

  return (
    <div>
      <h3>Home page</h3>
      <p>click the button to go to user with id 2</p>
      <button onClick={() => history.push(`/user/${location.state.userId}`)}>
        Go to User
      </button>
    </div>
  );
};

export default Home;
