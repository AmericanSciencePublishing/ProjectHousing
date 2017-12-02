import React, { Component } from 'react';
import { Pagination as Page } from 'react-bootstrap';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 1 };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({ activePage: eventKey });
  }

  render() {
    return (
      <div className="text-center">
        <Page
          bsSize="large"
          items={10}
          maxButtons={5}
          activePage={this.state.activePage}
          onSelect={this.handleSelect}
          prev
          next
          first
          last
          boundaryLinks
          ellipsis
        />
      </div>
    );
  }
}

export default Pagination;
