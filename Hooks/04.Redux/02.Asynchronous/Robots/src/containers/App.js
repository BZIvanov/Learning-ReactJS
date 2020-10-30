import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import './App.css';
import { setSearchField, requestRobots } from '../store/actions';

const App = ({
  robots,
  searchField,
  onSearchChange,
  onRequestRobots,
  isPending,
}) => {
  useEffect(() => {
    onRequestRobots();
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {isPending ? <h1>Loading</h1> : <CardList robots={filteredRobots} />}
      </Scroll>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
