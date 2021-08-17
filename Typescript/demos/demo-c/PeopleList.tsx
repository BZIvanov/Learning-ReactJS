import React from 'react';
import { IPeople } from './interface/people';

const PeopleList: React.FC<IPeople> = ({ people }) => {
  // the return type from this function is array of jsx elements
  const renderList = (): JSX.Element[] => {
    return people.map((person) => <li key={person.name}>{person.name}</li>);
  };

  return <ul>{renderList()}</ul>;
};

export default PeopleList;
