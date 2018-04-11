import { connect } from 'react-redux';
import { GoogleMapsComponent } from './google-map.component';
import { getLocation } from '../app/app.actions';
import { fetchMapLocations, updateActiveMarker } from './google-map.actions';

const mapStateToProps = state => ({
  userCoords: {
    lat: state.appReducer.userLocation.lat,
    lng: state.appReducer.userLocation.lon,
    ratedPlaces: state.googleMapReducer.ratedPlaces
  },
  activeMarker: state.googleMapReducer.activeMarker
});

const mapDispatchToProps = {
  getLocation,
  fetchMapLocations,
  updateActiveMarker
};

export const GoogleMapContainer = connect(mapStateToProps, mapDispatchToProps)(
  GoogleMapsComponent
);
