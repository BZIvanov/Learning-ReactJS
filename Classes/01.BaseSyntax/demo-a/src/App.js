import React, { Component } from 'react';
// import components with capital letter
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  // everytime the state is changed the component will rerender
  state = {
    username: '',
    someOtherProp: [],
  };

  // with arrow function we dont need to bind this, we will keep it
  handleInputChange = (event) => {
    this.setState({ username: event.target.value });
  };

  // render method is required for class components, because it will return the html we want to be displayed
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '20px',
        }}
      >
        {/* React components should always start with capital letter */}
        <UserInput
          valueChange={this.handleInputChange}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName='Ivan' />
        <UserOutput>
          <p>
            Content between component tags goes as props.children in the
            component
          </p>
        </UserOutput>
      </div>
    );
  }
}

export default App;
