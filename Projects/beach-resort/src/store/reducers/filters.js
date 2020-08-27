import * as actionTypes from '../actions/action-types';

const initialState = {
  types: ['all'],
  selectedType: 'all',
  capacities: [],
  selectedCapacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FILTER:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case actionTypes.SET_FILTERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
