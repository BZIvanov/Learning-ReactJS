import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import Loading from '../components/Loading';
import * as actions from '../store/actions/rooms';
import defaultBcg from '../images/room-1.jpeg';

const SingleRoom = ({ onFetchRooms, loading, room }) => {
  useEffect(() => {
    onFetchRooms();
  }, [onFetchRooms]);

  if (loading) {
    return <Loading />;
  }

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...restImgs] = images;

  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {restImgs.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : ${size} SQFT</h6>
            <h6>
              max capacity :{' '}
              {capacity > 1 ? `${capacity} people` : `${capacity} person `}
            </h6>
            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && 'free breakfast included'}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

const mapStateToProps = ({ rooms }, ownProps) => {
  const room = rooms.rooms.find(
    (room) => room.slug === ownProps.match.params.slug
  );
  return { loading: rooms.loading, room };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchRooms: () => dispatch(actions.fetchRooms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRoom);
