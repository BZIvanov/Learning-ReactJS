import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import PublicHome from './components/PublicHome';
import SecretActors from './components/SecretActors';
import SecretMovies from './components/SecretMovies';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={PublicHome} />
          <Route path='/secret-movies' component={SecretMovies} />
          <Route path='/secret-actors' component={SecretActors} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
