// connect is hoc which is a function which returns function
import { connect } from 'react-redux'; // 7.2.4

import Person from './Person';
import PersonForm from './PersonForm';
import * as actionTypes from '../store/action-types';

const Persons = ({ persons, addPerson, removePerson }) => {
  return (
    <div>
      <PersonForm onPersonAdd={addPerson} />
      {persons.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          onPersonClick={() => removePerson(person.id)}
        />
      ))}
    </div>
  );
};

// the state here is our global store state. And the prs will be given to our component. If we want more things to be given to us we have to also add them here so we can use for the component
// as second parameter we have access to the props in case we need them here instead of directly in the component
const mapStateToProps = (state, props) => {
  // we choose the key names and this is how we will get the data in the props
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // type property has to be written type, naming for it is not up to us
    addPerson: (name, age) =>
      // object provided to dispatch method is the exact object we will receive for the reducer's switch case
      dispatch({ type: actionTypes.ADD_PERSON, payload: { name, age } }),
    removePerson: (id) =>
      dispatch({ type: actionTypes.REMOVE_PERSON, payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
