import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

var googleMapsAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
if (!googleMapsAPIKey)
  throw new Error("googleMapsAPIKey environment variable required");

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={props.coords}>
      <Marker position={props.coords} />
    </GoogleMap>
  ))
);

export class GoogleMapsComponent extends Component {
  render() {
    return (
      <Map
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?key=" +
          googleMapsAPIKey +
          "&v=3.exp&libraries=geometry,drawing,places"
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        coords={this.props.userCoords}
      />
    );
  }
}
