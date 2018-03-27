import { LOCATION_RATING_TYPES } from './location-rating.types';

const INITIAL_STATE = {
  features: []
};

export const locationRatingReducer = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case LOCATION_RATING_TYPES.toggleFeature:
      // let key = payload.location.lat + "," + payload.location.lon;
      const { feature } = payload;
      return {
        ...state,
        features: state.features.includes(feature)
          ? state.features.filter(f => f !== feature)
          : [...state.features, feature]
      };
    default:
      return state;
  }
};
