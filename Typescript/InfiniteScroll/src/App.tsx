import React, { useState, useEffect } from 'react';
import User from './User';
import { Content, Loading } from './App.styles';
import { getUsers } from './API';

type UserShape = {
  cell: string;
  email: string;
};

function App() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<Array<UserShape>>([]);
  const [loading, setLoading] = useState(true);

  const handleScroll = (event: React.UIEvent<HTMLElement>): void => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const newUsers = await getUsers(page);
      setUsers((prev) => [...prev, ...newUsers]);
      setLoading(false);
    };

    loadUsers();
  }, [page]);

  return (
    <div className='App'>
      <Content onScroll={handleScroll}>
        {users && users.map((user) => <User key={user.cell} user={user} />)}
      </Content>
      {loading && <Loading>Loading ...</Loading>}
    </div>
  );
}

export default App;
