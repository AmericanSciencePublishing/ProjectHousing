import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import SearchBarWithConditions from './SearchBarWithConditions';
import Label from './Label';
import Pagination from './Pagination';
import MapContainer from './MapContainer';
import ThumbnailList from './ThumbnailList';

import './HouseList.css';

class HouseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(queryString) {
    // const city = queryString;
    //
    // this.props.history.push(`/house-list?city=${city}`);
    // this.fetchHouseList(city);
  }

  render() {
    const labels = this.props.labels || [];
    const houseList = this.props.houseList || [];

    console.log(houseList.length);

    return (
      <div className="house_list_all">
        <SearchBarWithConditions handleSearch={this.handleSearch} />
        <div className="list-header">
          <span style={{ margin: 'auto 0' }}>
            {labels.map(label => (
              <Label key={label} title={label} withHandle />
            ))}
          </span>

          <span>
            <div>
              Sort By &nbsp;
              <DropdownButton title="Relevant" id="sort_by_button">
                <MenuItem eventKey="Relevant">Relevant</MenuItem>
                <MenuItem eventKey="Newest">Newest</MenuItem>
                <MenuItem eventKey="Lowest_Price">Lowest Price</MenuItem>
                <MenuItem eventKey="Highest_Price">Highest Price</MenuItem>
                <MenuItem eventKey="Largest">Largest</MenuItem>
                <MenuItem eventKey="Price_Reduced">Price Reduced</MenuItem>
              </DropdownButton>
            </div>
          </span>
        </div>

        <div className="map_and_list">
          <div className="map_on_the_left">
            <MapContainer />
          </div>

          <div className="list_on_the_right">
            <div id="thumbnail_list">
              <ThumbnailList houseList={houseList} />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HouseList);
