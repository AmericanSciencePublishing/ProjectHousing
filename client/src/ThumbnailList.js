import React, { Component } from 'react';
import axios from 'axios';

import Thumbnail from './Thumbnail';
import './ThumbnailList.css';

class ThumbnailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houseList: []
    };
  }

  componentDidMount() {
    axios
      .get('/houses')
      .then(res => res.data)
      .then(houseList => this.setState({ houseList }));
  }

  render() {
    return (
      <div className="thumbnail-list">
        {this.state.houseList.map(house => (
          <Thumbnail house={house} key={house._id} />
        ))}
      </div>
    );
  }
}

export default ThumbnailList;
