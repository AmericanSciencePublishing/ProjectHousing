import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import SearchBar from './SearchBar';
import Label from './Label';

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
  'Commercial',
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

const beds = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map(
  bed => bed + ' beds'
);

const baths = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map(
  bath => bath + ' baths'
);

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
    this.state = {};
    this.searchWithAttribute = this.searchWithAttribute.bind(this);
    this.clickLabel = this.clickLabel.bind(this);
    this.updateStateFromURL = this.updateStateFromURL.bind(this);
  }

  componentDidMount() {
    this.updateStateFromURL();
  }

  updateStateFromURL() {
    const searchParams = new URLSearchParams(this.props.location.search);

    for (let k of searchParams.keys()) {
      this.setState({ [k]: searchParams.get(k) });
    }
  }

  searchWithAttribute(attribute) {
    return (eventKey, event) => {
      const value = eventKey;

      this.setState({ [attribute]: value }, () => {
        const nextLocation =
          '/house-list?' +
          Object.keys(this.state)
            .map(key => `${key}=${this.state[key]}`)
            .join('&');
        this.props.history.push(nextLocation);
      });
    };
  }

  clickLabel(attribute) {
    // change url when user clicks a label
    return () => {
      const { location } = this.props;

      const searchParams = new URLSearchParams(location.search);

      searchParams.delete(attribute);

      const nextSearch = searchParams.toString();

      const nextLocation = { ...location, ...{ search: nextSearch } };

      this.props.history.push(nextLocation);

      delete this.state[attribute];
    };
  }

  render() {
    const searchParams = new URLSearchParams(this.props.location.search);
    let labels = [];

    for (let k of searchParams.keys()) {
      labels.push({ key: k, value: searchParams.get(k) });
    }

    return (
      <div>
        <div className="search-conditions">
          <div id="search-bar">
            <SearchBar />
          </div>

          <DropdownButton
            title="City"
            id="City"
            className="search-item"
            onSelect={this.searchWithAttribute('address')}
          >
            {cities.map(city => (
              <MenuItem eventKey={city} key={city}>
                {city}
              </MenuItem>
            ))}
          </DropdownButton>

          <DropdownButton
            title="Type"
            id="Type"
            className="search-item"
            onSelect={this.searchWithAttribute('type')}
          >
            {types.map(type => (
              <MenuItem eventKey={type} key={type}>
                {type}
              </MenuItem>
            ))}
          </DropdownButton>

          <DropdownButton
            title="Price"
            id="Price"
            className="search-item"
            onSelect={this.searchWithAttribute('price')}
          >
            {prices.map(price => (
              <MenuItem eventKey={price} key={price}>
                {price}
              </MenuItem>
            ))}
          </DropdownButton>

          <DropdownButton
            title="Beds"
            id="Beds"
            className="search-item"
            onSelect={this.searchWithAttribute('beds')}
          >
            {beds.map(bed => (
              <MenuItem eventKey={bed} key={bed}>
                {bed}
              </MenuItem>
            ))}
          </DropdownButton>

          <DropdownButton
            title="Baths"
            id="Baths"
            className="search-item"
            onSelect={this.searchWithAttribute('baths')}
          >
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
            onSelect={this.searchWithAttribute('houseSize')}
          >
            {house_sizes.map(size => (
              <MenuItem eventKey={size} key={size}>
                {size}
              </MenuItem>
            ))}
          </DropdownButton>

          <DropdownButton
            title="Lot Size"
            id="Lot_Size"
            className="search-item"
            onSelect={this.searchWithAttribute('lotSize')}
          >
            {lot_sizes.map(size => (
              <MenuItem eventKey={size} key={size}>
                {size}
              </MenuItem>
            ))}
          </DropdownButton>

          <DropdownButton
            title="Age"
            id="Age"
            className="search-item"
            onSelect={this.searchWithAttribute('age')}
          >
            {ages.map(age => (
              <MenuItem eventKey={age} key={age}>
                {age}
              </MenuItem>
            ))}
          </DropdownButton>
        </div>

        <div className="list-header">
          <div style={{ float: 'left' }}>
            {labels.map(label => (
              <Label
                key={label.key}
                attribute={label.key}
                title={label.value}
                withHandle
                onClick={this.clickLabel(label.key)}
              />
            ))}
          </div>

          <div style={{ float: 'right' }}>
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
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchConditions);
