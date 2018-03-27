import React, { Component } from 'react';
import { Button } from '../../ui-kit/button';

export class LocationRating extends Component {
  location = { name: 'Place name', lat: 1, lon: 2 };
  accessibilityFeatures = [
    'Accessible parking',
    'Ramp leading to the front door',
    'Front door opens automatically',
    'Signage is easily legible',
    'Service animal is welcome'
  ];

  render() {
    return (
      <div>
        <h1>{this.location.name}</h1>
        <div>
          {this.accessibilityFeatures.map((feature, index) => (
            <div key={index}>
              <input
                type="checkbox"
                onClick={() =>
                  this.props.onClickFeature(this.location, feature)
                }
              />
              {feature}
            </div>
          ))}
        </div>
        <div>
          <Button
            onClick={() =>
              alert(
                'I need to save the redux state in the database and go to the next page!'
              )
            }
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}
