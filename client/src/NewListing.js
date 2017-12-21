import React from 'react';
import axios from 'axios';

import HouseList from './HouseList';

class NewListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { houseList: [] };
  }

  componentDidMount() {
    axios
      .get('/houses/new-listing')
      .then(res => res.data)
      .then(houseList => this.setState({ houseList: houseList }));
  }

  render() {
    return (
      <HouseList labels={['New Listing']} houseList={this.state.houseList} />
    );
  }
}

export default NewListing;
