import React from 'react';
import axios from 'axios';

import HouseList from './HouseList';
import parseHouseDocument from './parseHouseDocument';

class NewListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { houseList: [] };
  }

  componentDidMount() {
    axios
      .get('/houses/new-listing')
      .then(res => res.data)
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
