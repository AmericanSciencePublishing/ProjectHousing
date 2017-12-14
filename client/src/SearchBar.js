import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({ query: '' });

    this.props.handleSearch(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <InputGroup>
          <FormControl
            type="text"
            placeholder="City, Zip, Address, Key Words"
            value={this.state.query}
            onChange={this.handleChange}
          />

          <InputGroup.Button>
            <Button bsStyle="warning" type="submit">
              Search
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </form>
    );
  }
}

export default Search;
