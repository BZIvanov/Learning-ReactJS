import { useParams } from 'react-router-dom';

const User = () => {
  // in the Route we specified id as dynamic parameter and this is how we can access it
  const params = useParams();

  console.log('useParams', params);

  return <div>User with id: {params.id}</div>;
};

export default User;
