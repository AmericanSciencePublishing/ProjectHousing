import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Label from './Label';

import './HouseListItem.css';

class CommercialListItem extends Component {
  render() {
    const {
      image,
      price,
      type,
      forSale,
      forRent,
      beds,
      baths,
      size,
      cars,
      city,
      state,
      zipcode,
      address,
      neighborhood,
      features,
      _id
    } = this.props.item;

    const path = `/details/${_id}`;

    return (
      <div className="container house-item">
        <div>
          <Link to={path}>
            <img src={image} alt="house" />
          </Link>
        </div>

        <div id="info">
          <div className="price">$ {price}</div>

          <div>
            {type.map(t => (
              <span className="type" key={t}>
                {t + ' / '}
              </span>
            ))}
            <span className="type">{forSale ? 'For Sale' : 'For Rent'}</span>
          </div>

          <div className="type">{`${beds} beds | ${baths} baths | ${size} sqft | ${cars} cars`}</div>

          <div className="address">{`${address} , ${city}, ${state} ${zipcode}`}</div>

          <div className="type">{neighborhood}</div>
          <div className="labels">
            {features.map(label => (
              <Label key={label} title={label} color="green" />
            ))}
          </div>
        </div>

        <div>
          <button className="like" />
        </div>
      </div>
    );
  }
}

export default CommercialListItem;
