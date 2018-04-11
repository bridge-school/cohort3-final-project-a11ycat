import { GOOGLE_MAP_TYPES } from './google-map.types';
import { apiService } from '../../shared/services/api-service';

export const updateRatedPlaces = ratedPlaces => {
  return {
    type: GOOGLE_MAP_TYPES.updateRatedPlaces,
    payload: {
      ratedPlaces
    }
  };
};

export const updateActiveMarker = activeMarker => {
  return {
    type: GOOGLE_MAP_TYPES.updateActiveMarker,
    payload: {
      activeMarker
    }
  };
};

export const fetchMapLocations = () => {
  return dispatch => {
    return apiService
      .get('/someModels')
      .then(response => {
        dispatch(updateRatedPlaces(response.data));
      })
      .catch(error => console.log(error));
  };
};
