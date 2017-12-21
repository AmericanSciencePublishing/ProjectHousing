import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Label from './Label';

import './RecommendedHouseListItem.css';

export default class RecommendedHouseListItem extends Component {
  render() {
    const {
      images,
      sqft,
      type,
      beds,
      baths,
      year_built,
      price_per_sqft,
      _id,
      address
    } = this.props.house;

    const path = `/details/${_id}`;

    const imageData = images[0].data; // binary data of first image

    return (
      <div className="recommended-house-item">
        <div>
          <Link to={path}>
            <img
              src={`data:image/jpeg;base64,${imageData}`}
              alt="house"
              width="100%"
              height="100%"
            />
          </Link>
        </div>

        <div>
          <Link to={path}>
            <div className="title">{`${address}`}</div>
          </Link>

          <p>{`Main Unit: ${beds} beds | ${baths} baths`}</p>
          <p>{`House Size: ${sqft} sqft`}</p>

          <p>Property Type: {type}</p>
          <p>Region</p>
          <p>{`Completion Time: ${year_built}`}</p>
          <p>Recommended Reason: </p>

          <div className="price-line">
            Start From:<span className="price">{price_per_sqft}</span>
          </div>
        </div>
      </div>
    );
  }
}
