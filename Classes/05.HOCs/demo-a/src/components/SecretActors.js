import React, { Component } from 'react';
import isAuthenticatedHOC from '../HOCs/isAuthenticate';

class SecretActors extends Component {
  render() {
    return <div>Secret Actors Page require authenticated user</div>;
  }
}

export default isAuthenticatedHOC(SecretActors);
