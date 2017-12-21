import React, { Component } from 'react';

import Thumbnail from './Thumbnail';
import './ThumbnailList.css';

class ThumbnailList extends Component {
  render() {
    const { houseList } = this.props;

    return (
      <div className="thumbnail-list">
        {houseList.map(house => <Thumbnail house={house} key={house._id} />)}
      </div>
    );
  }
}

export default ThumbnailList;
