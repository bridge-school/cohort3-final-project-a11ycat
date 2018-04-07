import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

const google=window.google;
const googleMapsAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
if (!googleMapsAPIKey)
  throw new Error('googleMapsAPIKey environment variable required');

const Map = withScriptjs(
  withGoogleMap(props => {
    return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={15}
      defaultCenter={props.coords}
      gridSize={60}
      onClick={props.onMapClicked}
    >
    <Marker title="User"
      position={props.coords}
    />
    {props.markers.map((marker, index) => {
      const infoWindow = props.activeMarker === index && (
        <InfoWindow onCloseClick={props.onInfoClose}>
            <div>
              <h1>Name: {marker.name}</h1>
            </div>
      </InfoWindow>);
      return (
        <Marker
          {...marker}  
          key={index}
          position={marker.position}
          name={marker.name}
          onClick={() => props.onMarkerClick(index)}>
          { infoWindow }
        </Marker>
      )}
  )}
    
    </GoogleMap>);
  }
));

export class GoogleMapsComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      markers:[{
        name: 'Harbourfront',
        position:{
          lat: 43.6399,
          lng: -79.3782,
        }
      }, {
        name: 'Fort York',
        position:{
          lat: 43.639217,
          lng: -79.400414,
        }
      }],
      activeMarker: null,
    };
  }

  onMarkerClick = (index) => {
    this.setState({
      activeMarker: index
    })
  };
  onMapClicked = () => {
    this.setState({ activeMarker: null });
  };
  onInfoClose = () => {
    this.setState({ activeMarker: null });
  }

  render() {
    return (
      <div>
        <Map
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?key=" +
            googleMapsAPIKey +
            "&v=3.exp&libraries=geometry,drawing,places"
          }
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          coords={this.props.userCoords}
          markers={this.state.markers}
          activeMarker={this.state.activeMarker}
          onMarkerClick={this.onMarkerClick}
          onInfoClose={this.onInfoClose}
          onMapClicked={this.onMapClicked}
        />
      </div>
    );
  }
}