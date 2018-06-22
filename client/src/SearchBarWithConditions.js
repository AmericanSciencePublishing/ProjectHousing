import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import SearchBar from './SearchBar';
import Label from './Label';

import './css/SearchBarWithConditions.css';

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

const prices = [2, 3, 4, 5, 6, 7, 8, 9, 10].map(price => price * 50000);
const beds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const baths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const house_sizes = [
  600,
  800,
  1000,
  1200,
  1400,
  1600,
  1800,
  2000,
  2250,
  2500,
  2750,
  3000,
  3500,
  4000,
  5000,
  6000,
  7000
];

const lot_sizes = [0.5, 1, 2, 5, 10, 20];
const ages = [5, 10, 15, 20, 50];

class SearchConditions extends Component {
  constructor(props) {
    super(props);
    this.state = { orderTitle: 'Relevant' };
    this.searchWithAttribute = this.searchWithAttribute.bind(this);
    this.clickLabel = this.clickLabel.bind(this);
    this.updateStateFromURL = this.updateStateFromURL.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
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

  changeOrder(eventKey, event) {
    const { sortHouses } = this.props;

    this.setState({ orderTitle: eventKey });
    sortHouses(eventKey);
  }

  render() {
    const searchParams = new URLSearchParams(this.props.location.search);
    let labels = [];

    for (let k of searchParams.keys()) {
      // text in label

      switch (k) {
        case 'address':
          labels.push({ key: k, value: searchParams.get(k) });
          break;
        case 'type':
          labels.push({ key: k, value: searchParams.get(k) });
          break;
        case 'price':
          labels.push({ key: k, value: 'Price $' + searchParams.get(k) });
          break;
        case 'beds':
          labels.push({ key: k, value: searchParams.get(k) + ' beds' });
          break;
        case 'baths':
          labels.push({ key: k, value: searchParams.get(k) + ' baths' });
          break;
        case 'houseSize':
          labels.push({ key: k, value: 'House size > ' + searchParams.get(k) });
          break;
        case 'lotSize':
          labels.push({ key: k, value: 'Lot size > ' + searchParams.get(k) });
          break;
        case 'age':
          labels.push({ key: k, value: 'Built age < ' + searchParams.get(k) });
          break;
        default:
          break;
      }
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
                $ {price.toLocaleString()}
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
                {bed} +
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
                {bath} +
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
                {size}+ sq ft
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
                {size}+ acres
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
                {age}+ years
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
              <DropdownButton
                title={this.state.orderTitle}
                id="sort_by_button"
                onSelect={this.changeOrder}
              >
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
