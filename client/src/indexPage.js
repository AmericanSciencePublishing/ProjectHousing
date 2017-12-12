import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  InputGroup,
  Button,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CityList from './CityList';
import ThumbnailList from './ThumbnailList';
import './indexPage.css';

export default class IndexPage extends Component {
  render() {
    return (
      <div className="index-page">
        <div id="search-area">
          <h1>What are you looking for?</h1>
          <div id="bar">
            <Col xs={12} sm={6} smOffset={3}>
              <form>
                <FormGroup>
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="City, Zip, Address, Key Words"
                      bsSize="lg"
                    />
                    <InputGroup.Button>
                      <Button bsStyle="warning" bsSize="lg">
                        Search
                      </Button>
                    </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
              </form>
            </Col>
          </div>
        </div>

        <div className="container">
          <CityList />
        </div>

        <hr />

        <div className="container group">
          <h1>Great School</h1>
          <ThumbnailList />

          <button className="custom-button">See More Listing</button>
        </div>

        <div className="container group">
          <h1>New Constructions</h1>
          <ThumbnailList />

          <Link to="/new-construction">
            <button className="custom-button">See More Listing</button>
          </Link>
        </div>
      </div>
    );
  }
}
