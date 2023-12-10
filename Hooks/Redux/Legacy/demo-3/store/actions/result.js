import * as actionTypes from './actionTypes';

const saveResult = (res) => {
  // below line is example of custom transformation before we save data to the store
  const updatedResult = res * 2;
  return {
    type: actionTypes.STORE_RESULT,
    payload: updatedResult,
  };
};

export const storeResult = (res) => {
  // getState is additional property provided by thunk. Because of thunk here we can return function with async code, otherwise it had to be an object
  return (dispatch, getState) => {
    setTimeout(() => {
      // with getState here we can get the previous state before we update it in case we need that
      const curr = getState().ctr.counter;
      console.log(curr);

      dispatch(saveResult(res));
    }, 1000);
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    payload: id,
  };
};
