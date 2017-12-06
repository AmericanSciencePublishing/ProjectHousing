import React, { Component } from 'react';

import axios from 'axios';

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
        {this.state.houseList.map(item => (
          <div className="thumbnail" key={item._id}>
            <img src={item.image} alt="" />
            <h1>$ {item.price.toLocaleString()}</h1>
            <p>{item.address}</p>
            <p>{`${item.beds} bds | ${item.baths} ba | ${item.size} sq ft`}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ThumbnailList;
