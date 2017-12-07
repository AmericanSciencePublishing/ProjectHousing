import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Label from './Label';

import './HouseListItem.css';

import { connect } from 'react-redux';
import { save_house } from './actions';

class CommercialListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.dispatch(save_house(this.props.item._id));
  }

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
      <div className="house-item">
        <div>
          <Link to={path}>
            <img src={image} alt="house" />
          </Link>
        </div>

        <div className="info">
          <span className="price">$ {price}</span>
          {forRent ? <span> / Month</span> : null}

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
          <button className="like" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default connect()(CommercialListItem);
