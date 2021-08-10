import React, { Component } from 'react';
import Validation from './Validation';
import Char from './Char';

class App extends Component {
  state = {
    userInput: '',
  };

  // here we can get more parameters than just event, but the event will always be the first one
  handleTextChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  handleCharDelete = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    this.setState({ userInput: text.join('') });
  };

  render() {
    // we can return wrapping html element from our component or an array like below. Array for react is valid as it is a single html element
    const charList = this.state.userInput
      .split('')
      .map((ch, index) => (
        <Char
          character={ch}
          key={index}
          onCharClick={() => this.handleCharDelete(index)}
        />
      ));

    return (
      <div>
        <input
          type='text'
          onChange={this.handleTextChange}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>

        <Validation inputLength={this.state.userInput.length} />

        {charList}
      </div>
    );
  }
}

export default App;
