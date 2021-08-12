import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef);
    console.log(this.imageRef.current.clientHeight);
    // if for some reason you don't see the clientHeight number or is 0, use load event on the image
  }

  render() {
    return (
      <div>
        <img
          ref={this.imageRef}
          src='https://cdn.pixabay.com/photo/2021/08/05/20/31/penguins-6524840_960_720.jpg'
          alt='some penguins'
        />
      </div>
    );
  }
}

export default App;
