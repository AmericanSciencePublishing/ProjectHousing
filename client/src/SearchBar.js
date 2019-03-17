import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputGroup, Button } from 'react-bootstrap';

import AutoSuggest from './AutoSuggest';

import './css/SearchBar.css';

class Search extends Component {
  render() {
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

    let input;

    const handleSearch = query => {
      this.props.history.push(`/house-list?address=${query}`);
      window.location.reload();
    };

    const handleClick = e => {
      handleSearch(input.value);
    };

    // Two ways to submit
    // 1. Auto suggest component calls onSelect once user hit enter on keyboard
    // 2. When user clicks search button, current value in auto suggestion
    // component will be fetched and submitted
    return (
      <div>
        <InputGroup>
          <AutoSuggest
            suggestions={cities}
            placeholder="City, Zipcode, Address..."
            onSelect={handleSearch}
            inputRef={el => (input = el)}
          />
          <InputGroup.Button>
            <Button bsStyle="warning" onClick={handleClick}>
              search
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </div>
    );
  }
}

export default withRouter(Search);
