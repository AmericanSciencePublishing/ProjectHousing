import React, { Component } from 'react';

import './css/Neighborhood.css';

export default class Neighborhood extends Component {
  render() {
    const { address, neighborhood, city, state } = this.props;

    return (
      <div className="neighborhood">
        <p>
          {`${address} is located at ${neighborhood} in the city of ${city}, ${state}`}
        </p>
        <p>
          Homes in {neighborhood} have a median sales price of $ PLACE HOLDER
        </p>
        <div className="price-box">
          <div>
            $ xxx, xxx <br />
            Median Price
          </div>

          <div>
            $ xxx, xxx <br />
            Price per Sq Ft
          </div>
        </div>
        <h3>Nearby Neighborhoods in {city}, {state}</h3>
        <div className="neighborhood-box">
          <div>
            Union Street <br />
            Median Listing: $2,600,000
          </div>
          <div>
            Japantown <br />Median Listing: $899,000
          </div>
          <div>
            Union Street <br />Median Listing: $2,600,000
          </div>
          <div>
            Japantown <br />Median Listing: $899,000
          </div>
        </div>
      </div>
    );
  }
}
