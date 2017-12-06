import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';

import './City.css';

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
    axios
      .get(`/cities/${city}`)
      .then(res => res.data)
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
