import React from 'react';
import { connect } from 'react-redux';
import { App } from './app.component';
import { getLocation } from './app.actions';
import '../../App.css';

const mapStateToProps = state => ({
  showAutoComplete: state.autoCompleteListReducer.showAutoComplete,
  listLocations: state.listItemReducer.locations
});

const mapDispatchToProps = {
  getLocation
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(
  App
);
