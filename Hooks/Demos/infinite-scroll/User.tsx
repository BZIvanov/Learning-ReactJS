import React from 'react';
import { Wrapper } from './User.styles';

type Props = {
  user: {
    email: string;
  };
};

const User: React.FC<Props> = ({ user }) => <Wrapper>{user.email}</Wrapper>;

export default User;
