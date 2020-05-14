import React from 'react';
// connect is hoc which is a function which returns function
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

const Persons = (props) => (
  <div>
    <AddPerson personAdded={props.onAddedPerson} />
    {props.prs.map((person) => (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        clicked={() => props.onRemovedPerson(person.id)}
      />
    ))}
  </div>
);

// the state here is our global store state. And the prs will be given to our component. If we want more things to be given to us we have to also add them here so we can use for the component
const mapStateToProps = (state) => {
  // we choose the key names and this is how we will get the data in the props
  return {
    prs: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // type property has to be written type, naming for it is not up to us
    onAddedPerson: (name, age) =>
      // object provided to dispatch method is the exact object we will receive for the reducer's switch case
      dispatch({ type: actionTypes.ADD_PERSON, personData: { name, age } }),
    onRemovedPerson: (id) =>
      dispatch({ type: actionTypes.REMOVE_PERSON, personId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
