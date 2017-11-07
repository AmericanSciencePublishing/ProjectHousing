import React, { Component } from 'react';
import {
  Navbar,
  FormGroup,
  FormControl,
  Button,
  DropdownButton,
  MenuItem
} from 'react-bootstrap';

import CommercialListItem from './CommercialListItem';
import Pagination from './Pagination';

import './Commercial.css';

class Commercial extends Component {
  render() {
    const commercialList = [
      {
        price: '210000',
        'description': 'Condo/Townhouse',
        'details': '3 Beds | 2 Baths | 1,850sqft | 2cars',
        address: '2253 St, CA',
        labels: ['Quie', 'Convenient']
      },
      {
        price: '210000',
        'description': 'Condo/Townhouse',
        'details': '3 Beds | 2 Baths | 1,850sqft | 2cars',
        address: '2253 St, CA',
        labels: ['Quie', 'Convenient']
      },
      {
        price: '210000',
        'description': 'Condo/Townhouse',
        'details': '3 Beds | 2 Baths | 1,850sqft | 2cars',
        address: '2253 St, CA',
        labels: ['Quie', 'Convenient']
      },
      {
        price: '210000',
        'description': 'Condo/Townhouse',
        'details': '3 Beds | 2 Baths | 1,850sqft | 2cars',
        address: '2253 St, CA',
        labels: ['Quie', 'Convenient']
      }
    ];

    return (
      <div>
        <div id="search-conditions">
          <div className="container">
            <Navbar.Form>
              <FormGroup className="">
                <FormControl
                  type="text"
                  placeholder="City, Zip, Address, Key Words"
                  id="search-bar"
                />
                <Button type="submit" bsStyle="warning">
                  Search
                </Button>
              </FormGroup>

              <FormGroup className="condition">
                <DropdownButton title="City">
                  <MenuItem>Chicago</MenuItem>
                  <MenuItem>New York</MenuItem>
                  <MenuItem>San Francisco</MenuItem>
                </DropdownButton>
              </FormGroup>

              <FormGroup className="condition">
                <DropdownButton title="Area" />
              </FormGroup>

              <FormGroup className="condition">
                <DropdownButton title="Type" />
              </FormGroup>

              <FormGroup className="condition">
                <DropdownButton title="Price" />
              </FormGroup>
              <FormGroup className="condition">
                <DropdownButton title="Beds" />
              </FormGroup>
              <FormGroup className="condition">
                <DropdownButton title="Baths" />
              </FormGroup>

              <FormGroup className="condition">
                <DropdownButton title="House Size" />
              </FormGroup>
            </Navbar.Form>
          </div>
        </div>

        <div className="container">
          {commercialList.map(item => {
            return (
              <CommercialListItem key={item.address} item={item} />
            );
          })}
        </div>

        <Pagination />
      </div>
    );
  }
}

export default Commercial;
