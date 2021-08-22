import React, { Component } from 'react';
import { connect } from 'react-redux';

const isAuthenticatedHOC = (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.isAllowedToAccess();
    }

    componentDidUpdate() {
      this.isAllowedToAccess();
    }

    isAllowedToAccess() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return { auth: state.auth };
  };

  return connect(mapStateToProps)(ComposedComponent);
};

export default isAuthenticatedHOC;
