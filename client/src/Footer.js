import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './Footer.css';

import facebook from './images/facebook.png';
import google from './images/google.png';
import instagram from './images/instagram.png';
import youtube from './images/youtube.png';
import linkedin from './images/linkedin.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Row>
          <Col xs={4} xsOffset={4} sm={4} smOffset={8}>
            <a href="/">
              <img src={facebook} alt="facebook link" />
            </a>
            <a href="/">
              <img src={google} alt="google plus link" />
            </a>
            <a href="/">
              <img src={instagram} alt="instagram link" />
            </a>
            <a href="/">
              <img src={youtube} alt="youtube link" />
            </a>
            <a href="/">
              <img src={linkedin} alt="linkedin link" />
            </a>
          </Col>
        </Row>
        <Row>
          <hr />
          <p>Copyright &copy;2017 All Rights Reserved</p>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
