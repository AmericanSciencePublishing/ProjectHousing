import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  InputGroup,
  Button,
  Col
} from 'react-bootstrap';

import ConstructionThumbnail from './ConstructionThumbnail';
import './indexPage.css';

import hot_cities from './images/index_page/hot_cities.png';
import new_york from './images/index_page/new_york.png';
import chicago from './images/index_page/chicago.png';
import boston from './images/index_page/boston.png';
import san_francisco from './images/index_page/san_francisco.png';
import los_angeles from './images/index_page/los_angeles.png';
import new_jersey from './images/index_page/new_jersey.png';
import seattle from './images/index_page/seattle.png';

export default class IndexPage extends Component {
  render() {
    const cityImages = [
      hot_cities,
      new_york,
      chicago,
      boston,
      san_francisco,
      los_angeles,
      new_jersey,
      seattle
    ];

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
      <div>
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

        <div className="container" id="cities">
          {cityImages.map(image => {
            return (
              <Col sm={6} md={3} key={image}>
                <img src={image} alt="" />
              </Col>
            );
          })}
        </div>

        <hr />

        <div className="container group" >
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
          <button className="custom-button">See More Listing</button>
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
