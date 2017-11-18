import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

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
      <div className="container" id="item">
        <Row>
          <Col xs={12} md={6}>
            <img
              src={image}
              alt="house"
              id="house-image"
            />
          </Col>

          <Col xs={12} md={6}>
            <a href={url} target="_blank">
              <h2>[{city}] {name}</h2>
            </a>
            <p className="price">{price}</p>

            <p className="description">{description}</p>

            <p className="type">{type}</p>

            <p className="address">{address}</p>

            <div className="labels">
              {features.map(label => (
                <Label key={label} text={label} bsStyle="success" />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommercialListItem;
