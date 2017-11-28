import React, { Component } from 'react';

import SearchConditions from './SearchConditions';
import HouseList from './HouseList';

class Commercial extends Component {
  render() {
    return (
      <div>
        <SearchConditions />
        <HouseList labels={['Commercial']} />
      </div>
    );
  }
}

export default Commercial;
