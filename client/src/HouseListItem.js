import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Label from './Label';

import './HouseListItem.css';

class CommercialListItem extends Component {
  render() {
    const {
      image,
      price,
      description,
      type,
      address,
      features,
      _id
    } = this.props.item;

    const path = `/details/${_id}`;

    return (
      <div className="container house-item">
        <Link to={path}>
          <img src={image} alt="house" className="house-image" />
        </Link>

        <div id="info">
          <p className="price">$ {price}</p>

          <p className="description">{description}</p>

          <p className="type">{type}</p>

          <p className="address">{address}</p>

          <div className="labels">
            {features.map(label => (
              <Label key={label} title={label} bsStyle="success" />
            ))}
          </div>
        </div>

        <div>
          <Button>Like</Button>
        </div>
      </div>
    );
  }
}

export default CommercialListItem;
