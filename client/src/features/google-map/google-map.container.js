import { connect } from "react-redux";
import { GoogleMapsComponent } from "./google-map.component";
import { getLocation } from "../app/app.actions";

const mapStateToProps = state => ({
  userCoords: {
    lat: state.appReducer.userLocation.lat,
    lng: state.appReducer.userLocation.lon
  }
});

const mapDispatchToProps = {
  getLocation
};

export const GoogleMapContainer = connect(mapStateToProps, mapDispatchToProps)(
  GoogleMapsComponent
);
