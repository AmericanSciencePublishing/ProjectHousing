import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Label from './Label';

import './HouseListItem.css';

class CommercialListItem extends Component {
  render() {
    const {
      image,
      name,
      url,
      price,
      description,
      type,
      city,
      address,
      features
    } = this.props.item;

    return (
      <div className="container item">
        <a href={url}>
          <img src={image} alt="house" className="house-image" />
        </a>

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
