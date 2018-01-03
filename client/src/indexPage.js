import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import CityList from './CityList';
import ThumbnailList from './ThumbnailList';
import SearchBar from './SearchBar';

import parseHouseDocument from './parseHouseDocument';

import './indexPage.css';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses_great_school: [],
      houses_new_construction: []
    };
  }

  componentDidMount() {
    // load houses for two categories
    axios
      .get('/houses/new-construction')
      .then(res => res.data)
      .then(houseList => parseHouseDocument(houseList))
      .then(houseList =>
        this.setState({
          houses_new_construction: houseList
        })
      )
      .catch(err => console.log(err));

    axios
      .get('/houses/great-school')
      .then(res => res.data)
      .then(houseList => parseHouseDocument(houseList))
      .then(houseList =>
        this.setState({
          houses_great_school: houseList
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { houses_new_construction, houses_great_school } = this.state;

    return (
      <div className="index-page">
        <div id="search-area">
          <h1>What are you looking for?</h1>
          <div id="bar">
            <SearchBar />
          </div>
        </div>

        <div className="container">
          <CityList />
        </div>

        <hr />

        <div className="container group">
          <h1>New Constructions</h1>
          <ThumbnailList houseList={houses_new_construction} />

          <Link to="/new-construction">
            <button className="custom-button">See More Listing</button>
          </Link>
        </div>

        <div className="container group">
          <h1>Great School</h1>
          <ThumbnailList houseList={houses_great_school} />

          <button className="custom-button">See More Listing</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(IndexPage);
