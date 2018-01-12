import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import SearchBarWithConditions from './SearchBarWithConditions';
import Pagination from './Pagination';
import MapContainer from './MapContainer';
import ThumbnailList from './ThumbnailList';

import parseHouseDocument from './parseHouseDocument';

import './HouseList.css';

class HouseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { houseList: [] };
    this.updateHouseList = this.updateHouseList.bind(this);
  }

  componentDidMount() {
    const { search } = this.props.location;
    this.updateHouseList(search);
  }

  componentWillReceiveProps(nextProps) {
    const { search } = nextProps.location;
    this.updateHouseList(search);
  }

  updateHouseList(queryString) {
    axios
      .get(`/search${queryString}`)
      .then(res => res.data)
      .then(houseList => parseHouseDocument(houseList))
      .then(houseList => this.setState({ houseList }));
  }

  render() {
    const houseList = this.state.houseList || [];

    return (
      <div className="house_list_all">
        <SearchBarWithConditions />

        <div className="map_and_list">
          <div className="map_on_the_left">
            <MapContainer />
          </div>

          <div className="list_on_the_right">
            <div id="thumbnail_list">
              <ThumbnailList houseList={houseList} />
            </div>

            {houseList.length > 0 ? <Pagination /> : null}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HouseList);
