import React, { Component } from 'react';
import {} from 'react-bootstrap';
import axios from 'axios';

import HouseListItem from './HouseListItem';

import './NewConstructionList.css';

export default class NewConstructionList extends Component {
  constructor() {
    super();
    this.state = { houses: [] };
  }

  componentDidMount() {
    axios
      .get('/new_listing')
      .then(res => res.data)
      .then(houses => {
        this.setState({ houses: houses });
        console.log(houses);
      });
  }

  render() {
    return (
      <div>
        <div id="banner">
          <div id="banner-text">
            <h1>New Construction</h1>
            <h2>San Francisco</h2>
          </div>
        </div>

        {this.state.houses.map(house => (
          <HouseListItem key={house.address} item={house} />
        ))}
      </div>
    );
  }
}
