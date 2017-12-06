import React, { Component } from 'react';
import { Carousel, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';

import SearchBarWithBreadcrumbs from './SearchBarWithBreadcrumbs';
import City from './City';
import Neighborhood from './Neighborhood';
import SchoolList from './SchoolList';
import PropertyHistory from './PropertyHistory';
import ThumbnailList from './ThumbnailList';

import house_1 from './images/house_1.png';
import house_2 from './images/house_2.png';
import facebook from './images/facebook.png';
import google from './images/google.png';
import linkedin from './images/linkedin.png';

import './Details.css';

// House Schmea
/*
descriptionShort: String,
descriptionFull: String,
address: { type: String, index: { unique: true } },
city: String,
county: String,
state: String,
neighborhood: String,
zipcode: String,
type: [String],
beds: Number,
baths: Number,
cars: Number,
size: Number,
features: [String],
price: Number,
forSale: Boolean,
forRent: Boolean,
image: String,
decoration: String,
year: Number,
season: String,
structure: String,
propertyFee: Number,
style: String,
propertyTax: Number,
facilities: [String]
*/

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: null
    };
  }

  componentDidMount() {
    const path = `/houses/${this.props.match.params.id}`;
    axios
      .get(path)
      .then(res => res.data)
      .then(house =>
        this.setState({
          house
        })
      );
  }

  render() {
    if (!this.state.house) {
      return <div />;
    }

    const attributes = [
      { attribute: 'Type', value: this.state.house.type.join(" / ") },
      {
        attribute: 'Decoration Condition',
        value: this.state.house.decoration
      },
      { attribute: 'Built Year', value: this.state.house.year },
      { attribute: 'House Structure', value: this.state.house.structure },
      { attribute: 'Property Fee', value: `$ ${this.state.house.propertyFee}` },
      { attribute: 'Style', value: this.state.house.style },
      { attribute: 'Property Tax', value: `$ ${this.state.house.propertyTax}` },
      { attribute: 'Facilities', value: this.state.house.facilities }
    ];

    return (
      <div className="details">
        <SearchBarWithBreadcrumbs />

        <div className="container" style={{ marginTop: '2rem' }}>
          <Row>
            <Col xs={12} sm={8}>
              <div id="carousel">
                <Carousel>
                  <Carousel.Item>
                    <img src={house_1} alt="house_image" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={house_2} alt="house_image" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} sm={4}>

            </Col>
          </Row>
        </div>

        <div className="container info">
          <div>
            <span className="price">{`$${this.state.house.price}`}</span>
            <span>{`${this.state.house.beds} beds | ${this.state.house
              .baths} baths | ${this.state.house.size} sqft | ${this.state.house
              .cars} cars`}</span>
            <br />
            <span className="address">{this.state.house.address}</span>
            <a href="">See in Google Maps</a>
          </div>
          <div>
            <Button className="">Like</Button>

            <div id="links">
              <img src={facebook} alt="facebook" />
              <img src={google} alt="google" />
              <img src={linkedin} alt="linkedin" />
            </div>
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

        <div className="container attributes">
          {attributes.map(pair => (
            <Col xs={12} sm={6} key={pair.attribute}>
              <span className="attribute">{pair.attribute}</span>
              <span className="value">{pair.value}</span>
            </Col>
          ))}

          <div className="description">{this.state.house.descriptionFull}</div>
        </div>

        <div className="container box">
          <City cityName="San Francisco" />
        </div>

        <div className="container box">
          <h2>Neighborhood</h2>
          <Neighborhood
            address={this.state.house.address}
            neighborhood={this.state.house.neighborhood}
            city={this.state.house.city}
            state={this.state.house.state}
          />
        </div>

        <div className="container box">
          <h2>Nearby Schools</h2>
          <SchoolList />
        </div>

        <div className="container box">
          <h2>Property History</h2>
          <PropertyHistory />
        </div>

        <div className="container box">
          <h2>Recommned</h2>
          <ThumbnailList />
        </div>
      </div>
    );
  }
}
