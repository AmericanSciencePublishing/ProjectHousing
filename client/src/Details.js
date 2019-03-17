import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Footer from './Footer';
import SearchBarWithBreadcrumbs from './SearchBarWithBreadcrumbs';
import City from './City';
import Neighborhood from './Neighborhood';
import SchoolList from './SchoolList';
import PropertyHistory from './PropertyHistory';
import ThumbnailList from './ThumbnailList';
import Carousel from './Carousel';

import parseHouseDocument from './parseHouseDocument';
import { withRouter } from 'react-router-dom';

import * as HouseAPI from './utils/HouseAPI'

// import facebook from './images/facebook.png';
// import google from './images/google.png';
// import linkedin from './images/linkedin.png';

import './css/Details.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: null,
      recommendedHouseList: []
    };
  }

  componentDidMount() {
    const path = `${this.props.match.params.id}`;
    HouseAPI.get(path)
      .then(house => parseHouseDocument(house))
      .then(house =>
        this.setState({
          house
        })
      );

    HouseAPI.get('recommended')
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
      description,
      imageDirectory
    } = this.state.house;

    let images = [];
    for (var i = 1; i < 4; i++) {
      images.push(`${imageDirectory}/${i}.jpg`);
    }

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
        <SearchBarWithBreadcrumbs state={state} city={city} />
        <div className="container info">
          <div>
            <span className="city">{city}</span>
            <span>{`${beds} beds | ${baths} baths | ${size} sqft`}</span>
          </div>
          <div>{address}</div>
          <div>
            <span className="price">{`$ ${price.toLocaleString()}`}</span>
            <a href={`https://www.google.com/maps/search/?api=1&query=${address}`} target="_blank">See in Google Maps</a>
          </div>
        </div>

        <div className="container" style={{ margin: '2rem auto' }}>
          <Carousel height={450} width={800}>
            {images.map(image => <img src={image} alt="" key={image} />)}
          </Carousel>
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
