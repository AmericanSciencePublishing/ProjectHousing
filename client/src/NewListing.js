import React, { Component } from 'react';
import axios from 'axios';

import SearchConditions from './SearchConditions';
import Label from './Label';
import HouseListItem from './HouseListItem';

import './NewListing.css';

export default class NewListing extends Component {
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
        <SearchConditions />
        <div className="container">
          <div className="labels">
            <Label text="iHola" />
            <Label text="Commercial" withHandle />
          </div>

          <div>
            {this.state.houses.map(house => (
              <HouseListItem key={house.address} item={house} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
