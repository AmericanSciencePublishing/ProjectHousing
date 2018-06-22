import React, { Component } from 'react';

import SearchBar from './SearchBar';

import './css/SearchBarWithBreadcrumbs.css';

export default class SearchBarWithBreadcrumbs extends Component {
  render() {
    const { state, city } = this.props;

    return (
      <div className="search-bar-with-breadcrumbs">
        <div id="search-bar">
          <SearchBar />
        </div>

        <ul className="custom-breadcrumb">
          <li>{state}</li>
          <li>{city}</li>
        </ul>
      </div>
    );
  }
}
