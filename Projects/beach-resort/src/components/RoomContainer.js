import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import Loading from './Loading';
import * as actions from '../store/actions/rooms';

const RoomContainer = ({ onFetchRooms, loading, rooms, filters }) => {
  useEffect(() => {
    onFetchRooms();
  }, [onFetchRooms]);

  if (loading) {
    return <Loading />;
  }

  let filteredRooms = [...rooms];
  if (filters.selectedType !== 'all') {
    filteredRooms = rooms.filter((room) => room.type === filters.selectedType);
  }
  filteredRooms = filteredRooms
    .filter((room) => room.capacity >= parseInt(filters.selectedCapacity, 10))
    .filter((room) => room.price >= filters.price)
    .filter(
      (room) => room.size >= filters.minSize && room.size <= filters.maxSize
    );
  if (filters.breakfast) {
    filteredRooms = rooms.filter((room) => room.breakfast);
  }
  if (filters.pets) {
    filteredRooms = rooms.filter((room) => room.pets);
  }

  return (
    <>
      <RoomsFilter />
      <RoomsList rooms={filteredRooms} />
    </>
  );
};

const mapStateToProps = ({ rooms, filters }) => ({
  loading: rooms.loading,
  rooms: rooms.rooms,
  filters,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchRooms: () => dispatch(actions.fetchRooms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);
