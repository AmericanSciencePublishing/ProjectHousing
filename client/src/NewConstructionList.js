import React, { Component } from 'react';

import CityList from './CityList';
import HouseList from './RecommendedHouseList';

import './NewConstructionList.css';

export default class NewConstructionList extends Component {
  render() {
    return (
      <div>
        <div id="banner-area" />

        <div className="container">
          <CityList />

          <div className="strike">
            <span>Hot Sale</span>
          </div>

          <HouseList />
        </div>
      </div>
    );
  }
}
