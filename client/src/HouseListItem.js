import React, { Component } from 'react';
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
        <div>
          <Link to={path}>
            <img src={image} alt="house" />
          </Link>
        </div>

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
          <button className="like" />
        </div>
      </div>
    );
  }
}

export default CommercialListItem;
