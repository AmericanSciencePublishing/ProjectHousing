import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  InputGroup,
  Button,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import CityList from './CityList';
import ThumbnailList from './ThumbnailList';
import SearchBar from './SearchBar';
import './indexPage.css';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(queryString) {
    const path = `/house-list?city=${queryString}`;

    this.props.history.push(path);
  }

  render() {
    return (
      <div className="index-page">
        <div id="search-area">
          <h1>What are you looking for?</h1>
          <div id="bar">
            <SearchBar handleSearch={this.handleSearch} />
          </div>
        </div>

        <div className="container">
          <CityList />
        </div>

        <hr />

        <div className="container group">
          <h1>Great School</h1>
          <ThumbnailList />

          <button className="custom-button">See More Listing</button>
        </div>

        <div className="container group">
          <h1>New Constructions</h1>
          <ThumbnailList />

          <Link to="/new-construction">
            <button className="custom-button">See More Listing</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
