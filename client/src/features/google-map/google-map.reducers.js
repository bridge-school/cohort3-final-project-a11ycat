import { GOOGLE_MAP_TYPES } from './google-map.types';

const INITIAL_STATE = {
  ratedPlaces: [],
  activeMarker: null
};

export const googleMapReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GOOGLE_MAP_TYPES.updateRatedPlaces:
      return { ...state, ratedPlaces: payload.ratedPlaces };
    case GOOGLE_MAP_TYPES.updateActiveMarker:
      return { ...state, activeMarker: payload.activeMarker };
    default:
      return state;
  }
};
