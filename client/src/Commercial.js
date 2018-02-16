import React from 'react';
import * as HouseAPI from './utils/HouseAPI';

import HouseList from './HouseList';
import parseHouseDocument from './parseHouseDocument';

class Commercial extends React.Component {
  constructor(props) {
    super(props);
    this.state = { houseList: [] };
  }

  componentDidMount() {
    HouseAPI
      .get('commercial')
      .then(houseList => parseHouseDocument(houseList))
      .then(houseList => this.setState({ houseList }));
  }

  render() {
    return (
      <HouseList labels={['Commercial']} houseList={this.state.houseList} />
    );
  }
}

export default Commercial;
