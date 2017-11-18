import React, { Component } from 'react';
import axios from 'axios';

import SearchConditions from './SearchConditions';
import HouseListItem from './HouseListItem';
import Pagination from './Pagination';

import './Commercial.css';

class Commercial extends Component {
  constructor(){
    super();
    this.state = {houses: []};
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
          {this.state.houses.map(item => {
            return <HouseListItem key={item.address} item={item} />;
          })}
        </div>

        <Pagination />
      </div>
    );
  }
}

export default Commercial;
