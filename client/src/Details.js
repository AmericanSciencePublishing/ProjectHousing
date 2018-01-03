import React, { Component } from 'react';
import { Carousel, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Footer from './Footer';
import SearchBarWithBreadcrumbs from './SearchBarWithBreadcrumbs';
import City from './City';
import Neighborhood from './Neighborhood';
import SchoolList from './SchoolList';
import PropertyHistory from './PropertyHistory';
import ThumbnailList from './ThumbnailList';

import parseHouseDocument from './parseHouseDocument';

import { withRouter } from 'react-router-dom';

import house_1 from './images/house_1.png';
import house_2 from './images/house_2.png';
import facebook from './images/facebook.png';
import google from './images/google.png';
import linkedin from './images/linkedin.png';

import './Details.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: null,
      recommendedHouseList: []
    };
  }

  componentDidMount() {
    const path = `/houses/${this.props.match.params.id}`;
    axios
      .get(path)
      .then(res => res.data)
      .then(house => parseHouseDocument(house))
      .then(house =>
        this.setState({
          house
        })
      );

    axios
      .get(`/houses/recommended`)
      .then(res => res.data)
      .then(houseList => parseHouseDocument(houseList))
      .then(houses => this.setState({ recommendedHouseList: houses }));
  }

  render() {
    if (!this.state.house) {
      return <div />;
    }

    const { recommendedHouseList } = this.state;

    const {
      price,
      beds,
      baths,
      size,
      address,
      type,
      year_built,
      city,
      state,
      description
    } = this.state.house;

    const attributes = [
      { attribute: 'Type', value: type },
      {
        attribute: 'Decoration Condition',
        value: ''
      },
      { attribute: 'Built Year', value: year_built },
      { attribute: 'House Structure', value: '' },
      { attribute: 'Property Fee', value: '' },
      { attribute: 'Style', value: '' },
      { attribute: 'Property Tax', value: '' },
      {
        attribute: 'Exterior and Lot Features',
        value: ''
      }
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
            <Col xs={12} sm={4} />
          </Row>
        </div>

        <div className="container info">
          <div>
            <span className="price">{`$ ${price.toLocaleString()}`}</span>
            <span>{`${beds} beds | ${baths} baths | ${size} sqft`}</span>
            <br />
            <span className="address">{address}</span>
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

          <div className="description">{description}</div>
        </div>

        <div className="container box">
          <City cityName={city} />
        </div>

        <div className="container box">
          <h2>Neighborhood</h2>
          <Neighborhood
            address={address}
            neighborhood=""
            city={city}
            state={state}
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
        <Footer />
      </div>
    );
  }
}

export default withRouter(Details);
