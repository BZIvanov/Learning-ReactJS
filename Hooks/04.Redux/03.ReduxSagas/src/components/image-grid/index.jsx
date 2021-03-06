import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../button';
import Stats from '../stats';
import { loadImages } from '../../store/actions';
import './styles.css';

const ImageGrid = (props) => {
  const { isLoading, images, loadImages, error, imageStats } = props;

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return (
    <div className="content">
      <section className="grid">
        {images.map((image) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <Stats stats={imageStats[image.id]} />
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
      {error && <div className="error">{JSON.stringify(error)}</div>}
      <Button onClick={() => !isLoading && loadImages()} loading={isLoading}>
        Load More
      </Button>
    </div>
  );
};

const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
  isLoading,
  images,
  error,
  imageStats,
});

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
