import React, { Component } from 'react';

import SearchConditions from './SearchConditions';
import HouseList from './HouseList';

export default class NewListing extends Component {
  render() {
    return (
      <div>
        <SearchConditions />
        <HouseList labels={['New Listing', 'new construction']}/>
      </div>
    );
  }
}
