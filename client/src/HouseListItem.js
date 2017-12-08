import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Label from './Label';

import './HouseListItem.css';

import { connect } from 'react-redux';
import { save_house } from './actions';

/*
House Schema
  descriptionShort: String,
  descriptionFull: String,
  address: { type: String, index: { unique: true } },
  city: String,
  county: String,
  state: String,
  neighborhood: String,
  zipcode: String,
  type: [String],
  beds: Number,
  baths: Number,
  cars: Number,
  size: Number,
  features: [String],
  price: Number,
  forSale: Boolean,
  forRent: Boolean,
  image: String,
  decoration: String,
  year: Number,
  season: String,
  structure: String,
  propertyFee: Number,
  style: String,
  propertyTax: Number,
  facilities: [String]
  */

class CommercialListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { house: null, liked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.dispatch(save_house(this.props.item._id));
  }

  componentDidMount() {
    this.setState({ house: this.props.item });
  }

  render() {
    if (!this.state.house) {
      return <div />;
    }

    const {
      _id,
      image,
      price,
      forRent,
      forSale,
      type,
      beds,
      baths,
      cars,
      size,
      address,
      city,
      state,
      zipcode,
      neighborhood,
      features
    } = this.state.house;

    const path = `/details/${_id}`;

    const buttonState = `like ${this.props.savedHouses.has(_id)
      ? 'confirmed'
      : null}`;

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
          <button className={buttonState} onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savedHouses: state.savedHouses
});

export default connect(mapStateToProps)(CommercialListItem);
