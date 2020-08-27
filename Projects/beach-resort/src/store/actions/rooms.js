import Client from '../../contentful';
import { setFilters } from './filters';
import * as actionTypes from './action-types';
import transformRoomResponse from '../../utils/transform-rooms-response';
import extractFilters from '../../utils/extract-filters';

export const getRoomsStart = () => {
  return {
    type: actionTypes.GET_ROOMS_START,
  };
};

export const getRoomsSuccess = (rooms) => {
  return {
    type: actionTypes.GET_ROOMS_SUCCESS,
    payload: rooms,
  };
};

export const getRoomsFail = (error) => {
  return {
    type: actionTypes.GET_ROOMS_FAIL,
    payload: error,
  };
};

export const fetchRooms = () => {
  return async (dispatch) => {
    dispatch(getRoomsStart());

    try {
      const response = await Client.getEntries({
        content_type: 'beachResortRoom',
        order: '-fields.price',
      });
      const extractedFilters = extractFilters(response.items);
      dispatch(setFilters(extractedFilters));
      const transformedResponse = transformRoomResponse(response.items);
      dispatch(getRoomsSuccess(transformedResponse));
    } catch (error) {
      dispatch(getRoomsFail(error));
    }
  };
};
