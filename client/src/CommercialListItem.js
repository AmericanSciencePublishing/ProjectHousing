import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import './CommercialListItem.css';

class CommercialListItem extends Component {
  render(){
    const item = this.props.item;

    return (
      <div className="container" id="item">
        <Row>
          <Col xs={6}>
          <img src="http://lorempixel.com/400/200"  alt=""/>
          </Col>

          <Col xs={6}>
            <h1>{item.price}</h1>

            <p>{item.description}</p>

            <p>{item.details}</p>

            <p>{item.address}</p>

            <p>{item.tags}</p>

          </Col>
        </Row>
      </div>
    )}
}

export default CommercialListItem;
