import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import SearchBar from './SearchBar';

import './SearchBarWithConditions.css';

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

const types = [
  'House',
  'Apartment',
  'Condo/Co-ops',
  'Townhouse',
  'Conmercial',
  'Lots/Land',
  'Off-Market',
  'Chateau/Castle',
  'Development Project',
  'Crowdfunding Project',
  'Recommended'
];

const prices = [
  '$0 - 500k',
  '$500k - 1M',
  '$1M - 2M',
  '$2M - 3M',
  '$3M - 4M',
  '$4M - 5M',
  '$5M - 8M',
  '$8M - 10M',
  '$10M+'
];

const beds = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

const baths = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

const house_sizes = [
  '600+ sq ft',
  '800+ sq ft',
  '1,000+ sq ft',
  '1,200+ sq ft',
  '1,400+ sq ft',
  '1,600+ sq ft',
  '1,800+ sq ft',
  '2,000+ sq ft',
  '2,250+ sq ft',
  '2,500+ sq ft',
  '2,750+ sq ft',
  '3,000+ sq ft',
  '3,500+ sq ft',
  '4,000+ sq ft',
  '5,000+ sq ft',
  '6,000+ sq ft',
  '7,000+ sq ft'
];

const lot_sizes = [
  'Lot Size',
  'Under 1/2 acre',
  '1/2+ acre',
  '1+ acre',
  '2+ acres',
  '5+ acres',
  '10+ acres',
  '20+ acres'
];

const ages = [
  '0-5 Years',
  '0-10 Years',
  '0-15 Years',
  '0-20 Years',
  '0-50 Years',
  '51+ Years'
];

class SearchConditions extends Component {
  constructor(props) {
    super(props);
    this.searchWithAttribute = this.searchWithAttribute.bind(this);
  }

  searchWithAttribute(attribute) {
    return (eventKey, event) => {
      const value = eventKey;
      this.props.handleSearch(value);
    };
  }

  render() {
    return (
      <div className="search-conditions">
        <div id="search-bar">
          <SearchBar
            handleSearch={this.props.handleSearch}
            suggestions={cities}
          />
        </div>

        <DropdownButton
          title="City"
          id="City"
          className="search-item"
          onSelect={this.searchWithAttribute('city')}
        >
          {cities.map(city => (
            <MenuItem eventKey={city} key={city}>
              {city}
            </MenuItem>
          ))}
        </DropdownButton>

        <DropdownButton
          title="Area"
          id="Area"
          className="search-item"
          disabled
        />

        <DropdownButton title="Type" id="Type" className="search-item">
          {types.map(type => (
            <MenuItem eventKey={type} key={type}>
              {type}
            </MenuItem>
          ))}
        </DropdownButton>

        <DropdownButton title="Price" id="Price" className="search-item">
          {prices.map(price => (
            <MenuItem eventKey={price} key={price}>
              {price}
            </MenuItem>
          ))}
        </DropdownButton>

        <DropdownButton title="Beds" id="Beds" className="search-item">
          {beds.map(bed => (
            <MenuItem eventKey={bed} key={bed}>
              {bed}
            </MenuItem>
          ))}
        </DropdownButton>

        <DropdownButton title="Baths" id="Baths" className="search-item">
          {baths.map(bath => (
            <MenuItem eventKey={bath} key={bath}>
              {bath}
            </MenuItem>
          ))}
        </DropdownButton>

        <DropdownButton
          title="House Size"
          id="House_Size"
          className="search-item"
        >
          {house_sizes.map(size => (
            <MenuItem eventKey={size} key={size}>
              {size}
            </MenuItem>
          ))}
        </DropdownButton>

        <DropdownButton title="Lot Size" id="Lot_Size" className="search-item">
          {lot_sizes.map(size => (
            <MenuItem eventKey={size} key={size}>
              {size}
            </MenuItem>
          ))}
        </DropdownButton>

        <DropdownButton title="Age" id="Age" className="search-item">
          {ages.map(age => (
            <MenuItem eventKey={age} key={age}>
              {age}
            </MenuItem>
          ))}
        </DropdownButton>
      </div>
    );
  }
}

export default SearchConditions;