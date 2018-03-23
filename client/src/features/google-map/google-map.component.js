import React, { Component } from "react";
import { ListItem } from "../list-item/list-item.component";

var googleMapsAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
if (!googleMapsAPIKey)
  throw new Error("googleMapsAPIKey environment variable required");

export function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=" +
    googleMapsAPIKey +
    "&libraries=places&callback=googleMapsLoaded"; //& needed
  document.body.appendChild(script);
}

let map;
let infowindow;
let marker;
let iconBase = "https://maps.google.com/mapfiles/kml/shapes/";

export class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    window.googleMapsLoaded = this.initMap;
    loadScript();
  }

  initMap = () => {
    const google = window.google;
    var position = { lat: 43.644124, lng: -79.382277 };

    map = new google.maps.Map(this.gMap, {
      center: position,
      zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(
      {
        location: position,
        radius: 500,
        type: ["store"]
      },
      this.searchResultsReceived
    );

    marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: position
    });
    marker.addListener("click", this.toggleBounce);
  };

  searchResultsReceived = (results, status) => {
    const google = window.google;
    const numOfResults = 3;
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < Math.min(numOfResults, results.length); i++) {
        this.createMarker(results[i]);
      }
      this.setState({
        results: results.slice(0, numOfResults)
      });
    }
  };

  createMarker = place => {
    const google = window.google;
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
      map: map,
      position: placeLoc,
      icon: iconBase + "info_maps.png"
    });

    google.maps.event.addListener(marker, "click", function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  };

  toggleBounce = () => {
    const google = window.google;
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  };

  render() {
    const { results } = this.state;
    return (
      <div>
        <p>Closest Locations</p>
        <ul>
          {results.map((result, index) => (
            <ListItem key={index} locationName={result.name} />
          ))}
        </ul>
        <div className="map" ref={gMap => (this.gMap = gMap)} />
      </div>
    );
  }
}
