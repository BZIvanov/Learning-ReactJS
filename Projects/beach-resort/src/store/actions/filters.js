import * as actionTypes from './action-types';

export const setFilter = (filter) => {
  return {
    type: actionTypes.SET_FILTER,
    payload: filter,
  };
};

export const setFilters = (filters) => {
  return {
    type: actionTypes.SET_FILTERS,
    payload: filters,
  };
};
