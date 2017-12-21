import React, { Component } from 'react';
import { Carousel, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';

import SearchBarWithBreadcrumbs from './SearchBarWithBreadcrumbs';
import City from './City';
import Neighborhood from './Neighborhood';
import SchoolList from './SchoolList';
import PropertyHistory from './PropertyHistory';
import ThumbnailList from './ThumbnailList';

import { withRouter } from 'react-router-dom';

import house_1 from './images/house_1.png';
import house_2 from './images/house_2.png';
import facebook from './images/facebook.png';
import google from './images/google.png';
import linkedin from './images/linkedin.png';

import './Details.css';

// House Schema
// {
//     house_id : String,
//     address : String,
//     type: String,
//     year_built: String,
//     beds : String,
//     baths: String,
//     sqft : String,
//     lot : String,
//     price_per_sqft : String,
//     descriptions_short : [String],
//     description : String,
//     bedrooms : [String],
//     bathrooms : [String],
//     kitchen_dining : [String],
//     exterior_and_lot : [String],
//     other_rooms : [String],
//     interior : [String],
//     home : [String],
//     building_construction : [String],
//     garage_parking : [String],
//     heating_cooling : [String],
//     utilities : [String],
//     appliances : [String],
//     amenities_community_feature : [String],
//     school_information: [String],
//     other_info : [String],
//     save_date : String,
//     save_time : String,
//     images:[{
// 	data: Buffer,
// 	content_type: String
//     }],
//     lat : String,
//     lon : String
// }

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: null,
      recommendedHouseList: []
    };
    this.handleSearch = this.handleSearch.bind(this);
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

    axios
      .get(`/houses`)
      .then(res => res.data)
      .then(houses =>
        this.setState({ recommendedHouseList: houses.slice(0, 2) })
      );
  }

  handleSearch(queryString) {
    const city = queryString;

    this.props.history.push(`/house-list?city=${city}`);
  }

  render() {
    if (!this.state.house) {
      return <div />;
    }

    const attributes = [
      { attribute: 'Type', value: this.state.house.type },
      {
        attribute: 'Decoration Condition',
        value: ''
      },
      { attribute: 'Built Year', value: this.state.house.year_built },
      { attribute: 'House Structure', value: '' },
      { attribute: 'Property Fee', value: '' },
      { attribute: 'Style', value: '' },
      { attribute: 'Property Tax', value: '' },
      {
        attribute: 'Exterior and Lot Features',
        value: this.state.house.exterior_and_lot
      }
    ];

    const { recommendedHouseList } = this.state;

    return (
      <div className="details">
        <SearchBarWithBreadcrumbs handleSearch={this.handleSearch} />

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
            <Col xs={12} sm={4} />
          </Row>
        </div>

        <div className="container info">
          <div>
            <span className="price">{`Price per sqft: ${this.state.house
              .price_per_sqft}`}</span>
            <span>{`${this.state.house.beds} beds | ${this.state.house
              .baths} baths | ${this.state.house.sqft} sqft`}</span>
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
          <h2>Recommended</h2>
          <ThumbnailList houseList={recommendedHouseList} />
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
