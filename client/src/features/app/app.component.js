import React, { Component } from 'react';
import { ListItem } from '../list-item/list-item.component';
import logo from '../../logo.svg';
import apiService from '../../shared/services/api-service';
import { SearchBarContainer } from '../search-bar/search-bar.container';
import { AutoCompleteListContainer } from '../auto-complete-list/auto-complete-list.container';
import { LocationRatingContainer } from '../location-rating/location-rating.container';
import { GoogleMapContainer } from "../google-map/google-map.container";

export const defaultLocations = ['park', 'coffee shop', 'jungle'];

export class App extends Component {
  componentDidMount() {
    apiService
      .get('/someModels')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.props.getLocation();
  }

  render() {
    const { showAutoComplete, listLocations } = this.props;
    const showLocations =
      listLocations.length > 0 ? listLocations : defaultLocations;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">House of A11yCats</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ul>
          {showLocations.map((location, index) => (
            <ListItem key={index} locationName={location} />
          ))}
        </ul>
        <hr/>
        <SearchBarContainer />
        {showAutoComplete && <AutoCompleteListContainer />}
        <GoogleMapContainer/>  
        <div>
          <br />
          <br />
          -------------------
          <br />
          <br />
          This should be a new page, after clicking on "rate" button:
          <br />
          <br />
          <LocationRatingContainer />
        </div>
      </div>
    );
  }
}
