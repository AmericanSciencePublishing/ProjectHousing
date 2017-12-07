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
import ConstructionThumbnail from './ConstructionThumbnail';
import './indexPage.css';

export default class IndexPage extends Component {
  render() {
    const new_constructions = [
      {
        id: 1,
        image: 'http://lorempixel.com/400/200/sports',
        title: 'From $85,000',
        description: 'Condo, Chicago IL'
      },
      {
        id: 2,
        image: 'http://lorempixel.com/400/200/sports',
        title: 'From $95,000',
        description: 'Condo, Chicago IL'
      },
      {
        id: 3,
        image: 'http://lorempixel.com/400/200/sports',
        title: 'From $105,000',
        description: 'Condo, Chicago IL'
      }
    ];

    const great_school = [
      {
        id: 1,
        image: 'http://lorempixel.com/400/200/sports',
        title: 'From $85,000',
        description: 'Condo, Chicago IL'
      },
      {
        id: 2,
        image: 'http://lorempixel.com/400/200/sports',
        title: 'From $95,000',
        description: 'Condo, Chicago IL'
      },
      {
        id: 3,
        image: 'http://lorempixel.com/400/200/sports',
        title: 'From $105,000',
        description: 'Condo, Chicago IL'
      }
    ];

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
          <h1>New Constructions</h1>
          <div className="construction_group">
            {new_constructions.map(construction => {
              return (
                <ConstructionThumbnail
                  construction={construction}
                  key={construction.id}
                />
              );
            })}
          </div>

          <Link to="/new-construction">
            <button className="custom-button">See More Listing</button>
          </Link>
        </div>

        <div className="container group">
          <h1>Great School</h1>
          <div className="construction_group">
            {great_school.map(construction => {
              return (
                <ConstructionThumbnail
                  construction={construction}
                  key={construction.id}
                />
              );
            })}
          </div>

          <button className="custom-button">See More Listing</button>
        </div>
      </div>
    );
  }
}
