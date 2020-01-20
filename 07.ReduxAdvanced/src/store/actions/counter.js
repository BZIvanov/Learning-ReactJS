import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

// this is example of when we also get a value
export const add = ( value ) => {
  return {
    type: actionTypes.ADD,
    val: value
  };
};

export const subtract = ( value ) => {
  return {
    type: actionTypes.SUBTRACT,
    val: value
  };
};