import React, { Component } from 'react';

// import with capital letter
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  // everytime the state is changed the component will rerender
  state = {
    username: 'supermax',
    someOtherProp: [],
  };

  // with arrow function we dont need to bind this, we will keep it
  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  // render method is required for class components, because it will return the html we want to be displayed
  render() {
    return (
      <div>
        {/* React components should always start with capital letter */}
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Ivan" />
        <UserOutput>
          Content between component tags goes as props.children in the component
        </UserOutput>
      </div>
    );
  }
}

export default App;
