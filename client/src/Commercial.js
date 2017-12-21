import React from 'react';
import axios from 'axios';

import HouseList from './HouseList';

class Commercial extends React.Component {
  constructor(props) {
    super(props);
    this.state = { houseList: [] };
  }

  componentDidMount() {
    axios
      .get('/houses/commercial')
      .then(res => res.data)
      .then(houseList => this.setState({ houseList }));
  }

  render() {
    return (
      <HouseList labels={['Commercial']} houseList={this.state.houseList} />
    );
  }
}

export default Commercial;
