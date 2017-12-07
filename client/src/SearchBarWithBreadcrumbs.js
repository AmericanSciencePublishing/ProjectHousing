import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

import './SearchBarWithBreadcrumbs.css';

export default class SearchBarWithBreadcrumbs extends Component {
  render() {
    return (
      <div className="search-bar-with-breadcrumbs">
        <form>
          <InputGroup>
            <FormControl type="text" placeholder="City, Zip, Address, Key Words"/>

            <InputGroup.Button>
              <Button bsStyle="warning">Search</Button>
            </InputGroup.Button>
          </InputGroup>
        </form>

        <ul className="custom-breadcrumb">
          <li>California</li>
          <li>San Francisco County</li>
          <li>San Francisco</li>
        </ul>
      </div>
    );
  }
}
