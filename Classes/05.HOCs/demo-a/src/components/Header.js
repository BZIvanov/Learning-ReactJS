import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuth } from '../store/action-creators';

const styles = {
  display: 'flex',
  listStyleType: 'none',
  justifyContent: 'space-around',
};

class Header extends Component {
  render() {
    const { auth, setAuth } = this.props;

    return (
      <nav>
        <ul style={styles}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/secret-movies'>Secret Movies</Link>
          </li>
          <li>
            <Link to='/secret-actors'>Secret Actors</Link>
          </li>
        </ul>
        <button onClick={() => setAuth(!auth)}>
          {auth ? 'Sign out' : 'Sign in'}
        </button>
        <hr />
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { setAuth })(Header);
