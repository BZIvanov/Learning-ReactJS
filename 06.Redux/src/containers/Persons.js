import React, { Component } from 'react';
// connect is hoc which is a function which returns function
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovedPerson(person.id)}/>
                ))}
            </div>
        );
    }
}

// the state here is our global store state. And the prs will be given to our component. If we want more things to be given to us we have to also add them here so we can use for the component
const mapStateToProps = state => {
    return {
        prs: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // type property has to be written type, naming for it is not up to us
        onAddedPerson: (name, age) => dispatch({type: actionTypes.ADD_PERSON, personData: {name: name, age: age}}),
        onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);