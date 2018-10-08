import React from 'react';
import { withRouter } from 'react-router-dom';
import * as HouseAPI from './utils/HouseAPI';
import Footer from './Footer';
import SearchBarWithConditions from './SearchBarWithConditions';
// import Pagination from './Pagination';
import MapContainer from './MapContainer';
import ThumbnailList from './ThumbnailList';
import PropTypes from 'prop-types';
import parseHouseDocument from './parseHouseDocument';

import './css/HouseList.css';

class HouseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { houseList: [] };
    this.updateHouseList = this.updateHouseList.bind(this);
    this.loadMoreHouse = this.loadMoreHouse.bind(this);
    this.sortHouses = this.sortHouses.bind(this);
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
    const searchString = `${queryString}`;
    HouseAPI
    .search(searchString)
    .then(houseList => parseHouseDocument(houseList))
    .then(houseList => this.setState({ houseList }));
  }

  loadMoreHouse() {
    const { location } = this.props;
    const { search } = location;

    const searchParams = new URLSearchParams(search);
    const page = searchParams.get('page');

    if (!page) {
      const nextLocation = { ...location, ...{ search: search + '&page=2' } };
      this.props.history.push(nextLocation);
    } else {
      searchParams.set('page', parseInt(page, 10) + 1);
      const nextSearch = searchParams.toString();

      const nextLocation = {
        ...location,
        ...{ search: nextSearch }
      };
      this.props.history.push(nextLocation);
    }
  }

  sortHouses(order) {
    console.log('house list before sorting: ', this.state.houseList);
    console.log('order: ', order);

    let compareFunction;
    switch (order) {
      case 'Lowest_Price':
      compareFunction = (a, b) => {
        return a.price > b.price;
      };
      break;
      case 'Highest_Price':
      compareFunction = (a, b) => {
        return a.price < b.price;
      };
      break;

      default:
      // ascending price order by default
      compareFunction = (a, b) => {
        return a.price > b.price;
      };
    }

    this.setState(prevState => {
      const { houseList } = prevState;
      houseList.sort(compareFunction);
      return { houseList: houseList };
    });
  }

  render() {
    const houseList = this.state.houseList ;


    return (
      <div className="house_list_all">
        <SearchBarWithConditions sortHouses={this.sortHouses} />

        <div className="map_and_list">

          <div className="map_on_the_left">
            <MapContainer houseList={houseList}/>
          </div>

          <div className="list_on_the_right">
            <div className="list-on-the-right-content">
              <ThumbnailList houseList={houseList} width="48"/>
            </div>
            <button onClick={this.loadMoreHouse}>Show More</button>
            <Footer />
          </div>

        </div>
      </div>
    );
  }
}

HouseList.propTypes = {
  houseList: PropTypes.array,
};

HouseList.defaultProps = {
  houseList: [],
};

export default withRouter(HouseList);
