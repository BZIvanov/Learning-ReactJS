import { useState } from 'react';

import UserList from './components/UserList';
import ResourceList from './components/ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <UserList />

      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>

      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
