import * as actionTypes from './actionTypes';

export const saveResult = ( res ) => {
  // const updatedResult = res * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
}

export const storeResult = ( res ) => {
  // getState is additional property provided by thunk. Because of thunk here we can return function with async code, otherwise it had to be an object
  return (dispatch, getState) => {
    setTimeout( () => {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResult(res));
    }, 2000 );
  }
};

export const deleteResult = ( resElId ) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId
  };
};