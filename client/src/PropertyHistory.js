import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import './css/PropertyHistory.css';

export default class PropertyHistory extends Component {
  render() {
    const priceList = [
      {
        date: '12/05/2017',
        event: 'Listed',
        price: 1099900,
        priceSqft: 329,
        source: 'Chicago'
      }
    ];

    return (
      <div className="property-history">
        <h3>Property Price</h3>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Price</th>
              <th>Price / Sq Ft</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {priceList.map(price => (
              <tr key={price.date}>
                <td>{price.date}</td>
                <td>{price.event}</td>
                <td>{price.price}</td>
                <td>{price.priceSqft}</td>
                <td>{price.source}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h3>Property Tax</h3>

        <p>No property tax history available for this property. </p>
        <p>About History &Taxes Data </p>
        <p>
          The price and tax history data displayed is obtained from public
          records and/or MLS feeds from the local jurisdiction. Contact your
          REALTOR® directly in order to obtain the most up-to-date information
          available.
        </p>
      </div>
    );
  }
}
