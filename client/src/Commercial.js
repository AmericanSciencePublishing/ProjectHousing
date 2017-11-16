import React, { Component } from 'react';

import SearchConditions from './SearchConditions';
import HouseListItem from './HouseListItem';
import Pagination from './Pagination';

import './Commercial.css';

class Commercial extends Component {
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
      },
    ];

    return (
      <div>
        <SearchConditions />
        <div className="container">
          {houses.map(item => {
            return <HouseListItem key={item.address} item={item} />;
          })}
        </div>

        <Pagination />
      </div>
    );
  }
}

export default Commercial;
