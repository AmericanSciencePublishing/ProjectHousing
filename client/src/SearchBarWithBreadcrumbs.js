import React, { Component } from 'react';

import SearchBar from './SearchBar';

import './SearchBarWithBreadcrumbs.css';

const cities = [
  'Arlington',
  'Atlanta',
  'Austin',
  'Boston',
  'Chicago',
  'Columbus',
  'Dallas',
  'Denver',
  'Fort Worth',
  'Houston',
  'Indianapolis',
  'Jacksonville',
  'Las Vegas',
  'Long Beach',
  'Los Angeles',
  'Memphis',
  'Miami',
  'Milwaukee',
  'Minneapolis',
  'New Your',
  'Oakland',
  'Philadelphia',
  'Phoenix',
  'Portland',
  'San Antonio',
  'San Diego',
  'San Francisco',
  'San Jose',
  'Virginia Beach',
  'Washington'
];

export default class SearchBarWithBreadcrumbs extends Component {
  render() {
    return (
      <div className="search-bar-with-breadcrumbs">
        <SearchBar handleSearch={this.props.handleSearch} suggestions={cities}/>

        <ul className="custom-breadcrumb">
          <li>California</li>
          <li>San Francisco County</li>
          <li>San Francisco</li>
        </ul>
      </div>
    );
  }
}
