import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Thumbnail from './Thumbnail';

import './css/ThumbnailList.css';

class ThumbnailList extends Component {
  render() {
    const houseList = this.props.houseList || [];

    return (
      <div className="thumbnail-list">
        <Grid>
          {houseList.map(house =>
            <Col xs={12} md={6} key={house._id}>
              <Thumbnail house={house} key={house._id} />
            </Col>
          )}
        </Grid>
      </div>
    );
  }
}

export default ThumbnailList;
