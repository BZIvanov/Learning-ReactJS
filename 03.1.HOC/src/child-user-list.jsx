import React from 'react';
import withData from './with-data';

const UserList = ({ data }) => (
  <div>
    <h1> Users List </h1>
    {data.map((user) => (
      <div key={user.id}>
        <p> {user.name} </p>
      </div>
    ))}
  </div>
);

export default withData(UserList);
