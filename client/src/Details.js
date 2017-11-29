import React, { Component } from 'react';
import { Carousel, Button, Col } from 'react-bootstrap';

import SearchBarWithBreadcrumbs from './SearchBarWithBreadcrumbs';

import house_1 from './images/house_1.png';
import house_2 from './images/house_2.png';
import facebook from './images/facebook.png';
import google from './images/google.png';
import linkedin from './images/linkedin.png';

import './Details.css';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null,
      description: '',
      address: '',
      type: '',
      decorationCondition: '',
      builtYear: null,
      houseStructure: '',
      propertyFee: '',
      style: '',
      propertyTax: '',
      Facilities: ''
    };
  }

  componentDidMount() {
    this.setState({
      price: 200000,
      description: '3 Beds | 2 Baths',
      address: '2253 CA',
      type: 'Condo',
      decorationCondition: 'Fine',
      builtYear: '1911',
      houseStructure: '6 Floors',
      propertyFee: '$700 per month',
      style: 'Edwardian',
      propertyTax: '$9421 per year',
      Facilities: ''
    });
  }

  render() {
    return (
      <div>
        <SearchBarWithBreadcrumbs />

        <div className="container" id="carousel">
          <Carousel>
            <Carousel.Item>
              <img src={house_1} alt="house_image" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={house_2} alt="house_image" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="container" id="house-info">
          <span className="price">{this.state.price}</span>
          <span className="description">{this.state.description}</span>
          <br />
          <span className="address">{this.state.address}</span>
          <a href="">See in Google Maps</a>

          <Button>Like</Button>

          <div id="links">
            <img src={facebook} alt="facebook" />
            <img src={google} alt="google" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>

        <div className="container" id="custom-navbar">
          <div>Property Details</div>
          <div>City Intro</div>
          <div>Neighborhood</div>
          <div>Schools</div>
          <div>Property History</div>
          <div>Nearby Options</div>
        </div>

        <div className="container" id="property-details">
          <Col sm={12} md={6}>
            <span className="attribute">Type</span>
            <span className="value">{this.state.type}</span>
          </Col>
          <Col sm={12} md={6}>
            <span className="attribute">Decoration Condition</span>
            <span className="value">{this.state.decorationCondition}</span>
          </Col>
          <Col sm={12} md={6}>
            <span className="attribute">Built Year </span>
            <span className="value">{this.state.builtYear}</span>
          </Col>
          <Col sm={12} md={6}>
            <span className="attribute">House Structure </span>
            <span className="value">{this.state.houseStructure}</span>
          </Col>
          <Col sm={12} md={6}>
            <span className="attribute">Property Fee </span>
            <span className="value">{this.state.propertyFee}</span>
          </Col>
          <Col sm={12} md={6}>
            <span className="attribute">Stype </span>
            <span className="value">{this.state.style}</span>
          </Col>
          <Col sm={12} md={6}>
            <span className="attribute">Property Tax</span>
            <span className="value">{this.state.propertyTax}</span>
          </Col>
          <Col sm={12} md={6}>
            <span className="attribute">Facilities</span>
            <span className="value">{this.state.Facilities}</span>
          </Col>
        </div>
      </div>
    );
  }
}
