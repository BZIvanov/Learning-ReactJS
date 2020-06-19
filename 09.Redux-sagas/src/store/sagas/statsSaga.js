import { take, call, fork, put } from 'redux-saga/effects';
import { IMAGES_LOAD_SUCCESS } from '../constants';
import { fetchImageStats } from '../api';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

export function* handleStatsRequest(id) {
  for (let i = 0; i < 3; i++) {
    try {
      yield put(loadImageStats(id));
      const res = yield call(fetchImageStats, id);
      yield put(setImageStats(id, res.downloads.total));
      // image was loaded so we exit the generator, otherwise try 3 times
      return true;
    } catch (e) {
      // we just need to retry and dispactch an error
      // if we tried more than 3 times
    }
  }

  // the 3 attempts from the loop were unseccessful
  yield put(setImageStatsError(id));
}

export default function* watchStatsRequest() {
  while (true) {
    // we get the action here
    const { images } = yield take(IMAGES_LOAD_SUCCESS);

    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id);
    }
  }
}
