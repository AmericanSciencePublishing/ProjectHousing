import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Row>
          <Col xs={12} sm={4}>
            <h1>REAL ESTATE</h1>
            <p>Browse all homes</p>
            <p>Browse all homes</p>

          </Col>
          <Col xs={12} sm={4}>
            <h1>RENTALS</h1>
            <p>Browse all homes</p>
            <p>Browse all homes</p>

          </Col>
          <Col xs={12} sm={4}>
            <h1>MORTAGE RATES</h1>
            <p>Browse all homes</p>
            <p>Browse all homes</p>

          </Col>
        </Row>

        <hr />
        <p>Copyright &copy;2017 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
