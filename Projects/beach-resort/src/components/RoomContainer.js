import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import RoomsFilter from "./RoomFilter";
import RoomsList from './RoomList';
import Loading from './Loading';
import * as actions from '../store/actions/rooms';

const RoomContainer = ({ onFetchRooms, loading, rooms }) => {
  useEffect(() => {
    onFetchRooms();
  }, [onFetchRooms]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/* <RoomsFilter rooms={rooms} /> */}
      <RoomsList rooms={rooms} />
    </>
  );
};

const mapStateToProps = ({ rooms }) => ({
  loading: rooms.loading,
  rooms: rooms.rooms,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchRooms: () => dispatch(actions.fetchRooms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);
