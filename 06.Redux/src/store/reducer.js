import * as actionTypes from './actions';

const initialState = {
  persons: []
};

// state has default value for the very first time to be initilized with it. The 2 arguments state and action are provided by redux
const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: action.personData.name,
        age: action.personData.age
      }
      // below we use spread operator to get everything from the state because state items are not merged and we would lose the ones not specified otherwise. Be careful with deep cloning
      return {
        ...state,
        persons: state.persons.concat( newPerson )
      }
    case actionTypes.REMOVE_PERSON:
      // filter is a good approach for removing items without mutating the previous data
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.personId)
      }
  }
  return state;
};

export default reducer;