import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Label from './Label';

import './RecommendedHouseListItem.css';

export default class RecommendedHouseListItem extends Component {
  render() {
    const {
      image,
      city,
      neighborhood,
      size,
      type,
      beds,
      baths,
      year,
      season,
      features,
      price,
      id
    } = this.props.house;

    const path = `/details/${id}`;

    return (
      <div className="recommended-house-item">
        <div>
          <Link to={path}>
            <img src={image} alt="house" width="100%" height="100%" />
          </Link>
        </div>

        <div>
          <Link to={path}>
            <div className="title">{`[${city}] ${neighborhood} ${type[0]}`}</div>
          </Link>

          <p>{`Main Unit: ${beds} beds | ${baths} baths`}</p>
          <p>{`House Size: ${size} sqft`}</p>

          <p>
            Property Type:
            {type.map(t => (
              <span className="type" key={t}>
                {t + '/'}
              </span>
            ))}
          </p>
          <p>{`Region: ${city} | ${neighborhood}`}</p>
          <p>{`Completion Time: ${season} ${year}`}</p>
          <p>Recommended Reason: </p>
          <div className="labels">
            {features.map(feature => (
              <Label title={feature} color="green" key={feature} />
            ))}
          </div>

          <div className="price-line">
            Start From:<span className="price">${price}</span>
          </div>
        </div>
      </div>
    );
  }
}
