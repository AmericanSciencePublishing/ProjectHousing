import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/RecommendedHouseListItem.css';

export default class RecommendedHouseListItem extends Component {
  render() {
    const {
      _id,
      address,
      beds,
      baths,
      imageDirectory,
      size,
      price,
      year_built,
      type
    } = this.props.house;

    const path = `/details/${_id}`;

    return (
      <div className="recommended-house-item">
        <div>
          <Link to={path}>
            <img
              src={`${imageDirectory}/1.jpg`}
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
          <p>{`House Size: ${size} sqft`}</p>

          <p>Property Type: {type}</p>
          <p>Region</p>
          <p>{`Completion Time: ${year_built}`}</p>
          <p>Recommended Reason: </p>

          <div className="price-line">
            Start From:<span className="price">$ {price.toLocaleString()}</span>
          </div>
        </div>
      </div>
    );
  }
}
