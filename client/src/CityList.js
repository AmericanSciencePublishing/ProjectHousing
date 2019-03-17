import React from 'react';

import hot_cities from './images/index_page/hot_cities.png';
import new_york from './images/index_page/new_york.png';
import chicago from './images/index_page/chicago.png';
import boston from './images/index_page/boston.png';
import san_francisco from './images/index_page/san_francisco.png';
import los_angeles from './images/index_page/los_angeles.png';
import new_jersey from './images/index_page/new_jersey.png';
import seattle from './images/index_page/seattle.png';

import './css/CityList.css';

const CityList = props => {
  return (
    <div className="city-list">
      <img src={hot_cities} alt="hot_cities" />
      <img src={new_york} alt="new_york" />
      <img src={chicago} alt="chicago" />
      <img src={boston} alt="boston" />
      <img src={san_francisco} alt="san_francisco" />
      <img src={los_angeles} alt="los_angeles" />
      <img src={new_jersey} alt="new_jersey" />
      <img src={seattle} alt="seattle" />
    </div>
  );
};

export default CityList;
