import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import * as CityAPI from './utils/CityAPI';

import './css/City.css';

export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityImage: '',
      city: '',
      cityDescription: ''
    };
  }

  componentDidMount() {
    const city = this.props.cityName;
    CityAPI.get(`${city}`)
      .then(cityData =>
        this.setState({
          cityImage: cityData.image,
          city: city,
          cityDescription: cityData.description
        })
      );
  }

  render() {
    return (
      <div className="city">
        <div>
          <Image src={this.state.cityImage} responsive />
        </div>

        <div>
          <h2>{this.state.city}</h2>
          {this.state.cityDescription}
        </div>
      </div>
    );
  }
}
