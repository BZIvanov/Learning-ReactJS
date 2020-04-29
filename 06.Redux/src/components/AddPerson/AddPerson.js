import React, { Component } from 'react';

class AddPerson extends Component {
  // in this component we will combine usage of local state and redux state, because we dont want to use redux for each letter input
  state = {
    name: '',
    age: '',
  };

  nameChangedHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  ageChangedHandler = (event) => {
    this.setState({ age: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.nameChangedHandler}
          value={this.state.name}
        />
        <input
          type="number"
          onChange={this.ageChangedHandler}
          value={this.state.age}
        />
        <button
          onClick={() =>
            this.props.personAdded(this.state.name, this.state.age)
          }
        >
          Add Person
        </button>
      </div>
    );
  }
}

export default AddPerson;
