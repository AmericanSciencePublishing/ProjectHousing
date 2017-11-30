import React, { Component } from 'react';
import { DropdownButton, MenuItem, Row, Col } from 'react-bootstrap';
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
      <div>
        <div className="container list-header">
          <div className="labels">
            {this.state.labels.map(label => (
              <Label key={label} title={label} withHandle/>
            ))}
          </div>

          <div className="sort-by">
            Sort By &nbsp;
            <DropdownButton title="Relevant" id="sort_by_button">
              <MenuItem eventKey="Relevant">Relevant</MenuItem>
              <MenuItem eventKey="Newest">Newest</MenuItem>
              <MenuItem eventKey="Lowest_Price">Lowest Price</MenuItem>
              <MenuItem eventKey="Highest_Price">Highest Price</MenuItem>
              <MenuItem eventKey="Largest">Largest</MenuItem>
              <MenuItem eventKey="Price_Reduced">Price Reduced</MenuItem>
            </DropdownButton>
          </div>
        </div>

        <div className="house-list">
          {this.state.houses.map(house => (
            <HouseListItem item={house} key={house._id} />
          ))}
        </div>

        <Pagination />
      </div>
    );
  }
}

// <div className="container" id="labels_and_order">
//   <Row>
//     <Col xs={6} id="labels">
//       {this.state.labels.map(label => (
//         <Label key={label} title={label} />
//       ))}
//     </Col>
//
//     <Col xs={3} xsOffset={3}>
//       Sort By &nbsp;
//       <DropdownButton title="Relevant" id="sort_by_button">
//         <MenuItem eventKey="Relevant">Relevant</MenuItem>
//         <MenuItem eventKey="Newest">Newest</MenuItem>
//         <MenuItem eventKey="Lowest_Price">Lowest Price</MenuItem>
//         <MenuItem eventKey="Highest_Price">Highest Price</MenuItem>
//         <MenuItem eventKey="Largest">Largest</MenuItem>
//         <MenuItem eventKey="Price_Reduced">Price Reduced</MenuItem>
//       </DropdownButton>
//     </Col>
//   </Row>
// </div>
