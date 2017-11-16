import React, { Component } from 'react';
import {} from 'react-bootstrap';

import SearchConditions from './SearchConditions';
import Label from './Label';
import HouseListItem from './HouseListItem';

import './NewListing.css';

export default class NewListing extends Component {
  render() {
    const houses = [
      {
        price: '210000',
        description: 'Condo/Townhouse',
        details: '3 Beds | 2 Baths | 1,850sqft | 2cars',
        address: '2253 St, CA',
        labels: ['Quie', 'Convenient']
      },
      {
        price: '210000',
        description: 'Condo/Townhouse',
        details: '3 Beds | 2 Baths | 1,850sqft | 2cars',
        address: '2253 St, CA -',
        labels: ['Quie', 'Convenient']
      },
      {
        price: '210000',
        description: 'Condo/Townhouse',
        details: '3 Beds | 2 Baths | 1,850sqft | 2cars',
        address: '2253 St, CA --',
        labels: ['Quie', 'Convenient']
      }
    ];

    return (
      <div>
        <SearchConditions />
        <div className="container">
          <div id="labels">
            <Label text="Commercial" withHandle />
          </div>

          <div>
            {houses.map(house => (
              <HouseListItem key={house.address} item={house} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
