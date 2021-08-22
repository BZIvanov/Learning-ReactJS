import React, { Component } from 'react';
import isAuthenticatedHOC from '../HOCs/isAuthenticate';

class SecretMovies extends Component {
  render() {
    return <div>Secret Movies Page require authenticated user</div>;
  }
}

export default isAuthenticatedHOC(SecretMovies);
