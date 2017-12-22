import React, { Component } from 'react';
import axios from 'axios';

import HouseListItem from './RecommendedHouseListItem';
import parseHouseDocument from './parseHouseDocument';

export default class RecommendedHouseList extends Component {
  constructor(props) {
    super(props);
    this.state = { houses: [] };
  }

  componentDidMount() {
    axios
      .get('/houses')
      .then(res => res.data)
      .then(houseList=>parseHouseDocument(houseList))
      .then(houses => this.setState({ houses: houses.slice(0, 5) }));
  }

  render() {
    return (
      <div style={{ margin: '5rem auto' }}>
        {this.state.houses.map(house => (
          <HouseListItem house={house} key={house._id} />
        ))}
      </div>
    );
  }
}
