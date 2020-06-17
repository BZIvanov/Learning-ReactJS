import React from 'react';
import UserProfile from './child-user-profile';
import UserList from './child-user-list';

function App() {
  return (
    <div>
      <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile
        name="Vili"
        email="violeta@gmail.com"
        dataSource="https://jsonplaceholder.typicode.com/posts"
      />
    </div>
  );
}

export default App;
