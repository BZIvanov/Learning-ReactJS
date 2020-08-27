import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';
import * as actions from '../store/actions/rooms';

const FeaturedRooms = ({ onFetchRooms, loading, rooms }) => {
  useEffect(() => {
    onFetchRooms();
  }, [onFetchRooms]);

  const renderRooms = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : renderRooms}
      </div>
    </section>
  );
};

const mapStateToProps = ({ rooms }) => {
  const featuredRooms = rooms.rooms.filter((room) => room.featured);
  return { loading: rooms.loading, rooms: featuredRooms };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchRooms: () => dispatch(actions.fetchRooms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedRooms);
