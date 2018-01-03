import React, { Component } from 'react';

import SearchBar from './SearchBar';

import './SearchBarWithBreadcrumbs.css';

export default class SearchBarWithBreadcrumbs extends Component {
  render() {
    return (
      <div className="search-bar-with-breadcrumbs">
        <SearchBar />

        <ul className="custom-breadcrumb">
          <li>California</li>
          <li>San Francisco County</li>
          <li>San Francisco</li>
        </ul>
      </div>
    );
  }
}
