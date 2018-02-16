import React from 'react';
import * as HouseAPI from './utils/HouseAPI';

import HouseList from './HouseList';
import parseHouseDocument from './parseHouseDocument';

class NewListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { houseList: [] };
  }

  componentDidMount() {
    HouseAPI
      .get('new-listing')
      .then(houseList => parseHouseDocument(houseList))
      .then(houseList => this.setState({ houseList: houseList }));
  }

  render() {
    return (
      <HouseList labels={['New Listing']} houseList={this.state.houseList} />
    );
  }
}

export default NewListing;
