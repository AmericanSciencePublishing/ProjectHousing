import React, { Component } from 'react';
import Footer from './Footer';
import CityList from './CityList';
import HouseList from './RecommendedHouseList';

import './css/NewConstructionList.css';

export default class NewConstructionList extends Component {
  render() {
    return (
      <div className="new-construction-list">
        <div id="banner-area" />

        <div className="container">
          <CityList />

          <div className="strike">
            <span>Hot Sale</span>
          </div>

          <HouseList />
            </div>
	    <Footer />
      </div>
    );
  }
}
