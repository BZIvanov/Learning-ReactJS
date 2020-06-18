import * as constants from '../constants';

const loadImages = () => ({
  type: constants.IMAGES_LOAD,
});

const setImages = (images) => ({
  type: constants.IMAGES_LOAD_SUCCESS,
  images,
});

const setError = (error) => ({
  type: constants.IMAGES_LOAD_FAIL,
  error,
});

const loadImageStats = (id) => ({
  type: constants.STATS_LOAD,
  id,
});

const setImageStats = (id, downloads) => ({
  type: constants.STATS_LOAD_SUCCESS,
  id,
  downloads,
});

const setImageStatsError = (id) => ({
  type: constants.STATS_LOAD_FAIL,
  id,
});

export {
  loadImages,
  setImages,
  setError,
  loadImageStats,
  setImageStats,
  setImageStatsError,
};
