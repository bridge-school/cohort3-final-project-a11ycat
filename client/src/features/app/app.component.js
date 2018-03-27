import React, { Component } from "react";
import apiService from "../../shared/services/api-service";
import { SearchBarContainer } from "../search-bar/search-bar.container";
import { AutoCompleteListContainer } from "../auto-complete-list/auto-complete-list.container";
import { LocationRatingContainer } from "../location-rating/location-rating.container";
import { Header } from "../../ui-kit/header";

export const defaultLocations = ["park", "coffee shop", "jungle"];

export class App extends Component {
  componentDidMount() {
    apiService
      .get("/someModels")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.props.getLocation();
  }

  render() {
    const { showAutoComplete } = this.props;
    return (
      <div className="App">
        <Header headerText={"A11yCatz"} />

        <SearchBarContainer />
        {showAutoComplete && <AutoCompleteListContainer />}

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
