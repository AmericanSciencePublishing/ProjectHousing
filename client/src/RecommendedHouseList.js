import React, { Component } from 'react';
import axios from 'axios';

import HouseListItem from './RecommendedHouseListItem';

export default class RecommendedHouseList extends Component {
  constructor(props) {
    super(props);
    this.state = { houses: [] };
  }

  componentDidMount() {
    axios
      .get('/houses')
      .then(res => res.data)
      .then(houses => this.setState({ houses }));
  }

  render() {
    return (
      <div style={{margin: "5rem auto"}}>
        {this.state.houses.map(house => (
          <HouseListItem house={house} key={house._id} />
        ))}
      </div>
    );
  }
}
