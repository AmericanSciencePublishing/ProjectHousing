import React, { Component } from 'react';
import { Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';
import axios from 'axios';

import HouseListItem from './HouseListItem';
import Label from './Label';
import Pagination from './Pagination';

import './HouseList.css';

export default class HouseList extends Component {
  constructor(props) {
    super(props);
    this.state = { order: 'Newest', labels: [], houses: [] };
  }

  componentDidMount() {
    axios
      .get('/houses')
      .then(res => res.data)
      .then(houses => {
        this.setState({ houses: houses });
      });

    if (this.props.labels) {
      this.setState({ labels: this.props.labels });
    }
  }

  render() {
    return (
      <div className="house-list" style={{margin: "0 5rem"}}>
        <Row>
          <Col sm={12} md={8}>
            <div className="list-header">
              <span>
                {this.state.labels.map(label => (
                  <Label key={label} title={label} withHandle />
                ))}
              </span>

              <span>
                Sort By &nbsp;
                <DropdownButton title="Relevant" id="sort_by_button">
                  <MenuItem eventKey="Relevant">Relevant</MenuItem>
                  <MenuItem eventKey="Newest">Newest</MenuItem>
                  <MenuItem eventKey="Lowest_Price">Lowest Price</MenuItem>
                  <MenuItem eventKey="Highest_Price">Highest Price</MenuItem>
                  <MenuItem eventKey="Largest">Largest</MenuItem>
                  <MenuItem eventKey="Price_Reduced">Price Reduced</MenuItem>
                </DropdownButton>
              </span>
            </div>

            <div className="list">
              {this.state.houses.map(house => (
                <HouseListItem item={house} key={house._id} />
              ))}
            </div>

            <Pagination />

          </Col>
          <Col md={4}>
            <div>

            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
