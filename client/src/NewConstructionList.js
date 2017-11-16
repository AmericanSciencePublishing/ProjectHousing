import React, { Component } from 'react';
import {} from 'react-bootstrap';

import HouseListItem from './HouseListItem';

import './NewConstructionList.css';

export default class NewConstructionList extends Component {
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
        <div id="banner">
          <div id="banner-text">
            <h1>New Construction</h1>
            <h2>San Francisco</h2>
          </div>
        </div>

        {houses.map(house => (
          <HouseListItem
            key={house.address}
            item={house}
          />
        ))}
      </div>
    );
  }
}
