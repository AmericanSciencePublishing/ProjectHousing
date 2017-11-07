import React, { Component } from 'react';
import { Col, Row, Label } from 'react-bootstrap';

import './CommercialListItem.css';

class CommercialListItem extends Component {
  render(){
    const item = this.props.item;

    return (
      <div className="container" id="item">
        <Row>
          <Col xs={12} md={6}>
          <img src="http://lorempixel.com/400/200"  alt=""/>
          </Col>

          <Col xs={12} md={6}>
            <p className="price">{item.price}</p>

            <p className="description">{item.description}</p>

            <p className="type">{item.details}</p>

            <p className="address">{item.address}</p>

            {
              item.labels.map(
                label => <Label key={label} bsClass="custom-label">{label}</Label>
              )
            }

          </Col>
        </Row>
      </div>
    )}
}

export default CommercialListItem;
