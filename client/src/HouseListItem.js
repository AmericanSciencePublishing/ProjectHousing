import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import Label from './Label';

import './HouseListItem.css';

class CommercialListItem extends Component {
  render() {
    const item = this.props.item;

    return (
      <div className="container" id="item">
        <Row>
          <Col xs={12} md={6}>
            <img
              src="http://lorempixel.com/400/200"
              alt="house"
              id="house-image"
            />
          </Col>

          <Col xs={12} md={6}>
            <a href="/details" target="_blank">
              <h2>[Chicago] Lorem ipsum</h2>
            </a>
            <p className="price">{item.price}</p>

            <p className="description">{item.description}</p>

            <p className="type">{item.details}</p>

            <p className="address">{item.address}</p>


            <div className="labels">
              {item.labels.map(label => <Label key={label} text={label} bsStyle="success"/>)}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommercialListItem;
