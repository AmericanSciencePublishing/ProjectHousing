import React, { Component } from 'react';

import Label from './Label';

import './RecommendedHouseListItem.css';

export default class RecommendedHouseListItem extends Component {
  render() {
    const {
      image,
      city,
      name,
      description,
      size,
      type,
      builtYear,
      features,
      price
    } = this.props.house;

    return (
      <div className="recommended-house-item">
        <div>
          <img src={image} alt="house" width="100%" height="100%" />
        </div>

        <div>
          <a href="">
            [{city}] {name}
          </a>

          <p>Main Unit: {description}</p>
          <p>House Size: {size}</p>
          <p>Property Type: {type}</p>
          <p>Region: {city}</p>
          <p>Completion Time: {builtYear}</p>
          <p>Recommended Reason: </p>
          <div className="labels">
            {features.map(feature => <Label title={feature} bsStyle="success" key={feature}/>)}
          </div>
          <p>
            Start From:<span className="price">${price}</span>
          </p>
        </div>
      </div>
    );
  }
}
