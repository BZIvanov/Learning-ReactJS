import React from 'react';
import withData from './with-data';

const UserProfile = ({ data, name, email }) => (
  <div>
    <h1>{name}</h1>
    <h2>{email}</h2>
    Posts:
    {data.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p> {post.body} </p>
      </div>
    ))}
  </div>
);

export default withData(UserProfile);
