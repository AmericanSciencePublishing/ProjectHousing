import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import './css/SchoolList.css';

export default class SchoolList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullListShown: false,
      schoolList: [
        {
          school: 'San Francisco Public Montessori School',
          score: 8,
          grades: 'K-5',
          distance: '0.3mi'
        },
        {
          school: 'KIPP San Francisco Bay Academy School',
          score: 5,
          grades: 'K-5',
          distance: '0.3mi'
        },
        {
          school: 'San Francisco Public Montessori School II',
          score: 8,
          grades: 'K-5',
          distance: '0.3mi'
        },
        {
          school: 'KIPP San Francisco Bay Academy School II',
          score: 5,
          grades: 'K-5',
          distance: '0.3mi'
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isFullListShown: !prevState.isFullListShown
    }));
  }

  render() {
    const list = this.state.isFullListShown
      ? this.state.schoolList
      : this.state.schoolList.slice(0, 3);

    return (
      <div className="school-list">
        <div>
          <Table>
            <thead>
              <tr>
                <th>Scores *</th>
                <th>Nearyby School</th>
                <th>Grades</th>
                <th>Distance</th>
              </tr>
            </thead>
            <tbody>
              {list.map(item => (
                <tr key={item.school}>
                  <td>
                    <div className="score">{item.score}</div>
                  </td>
                  <td>
                    <div>{item.school}</div>
                  </td>
                  <td>
                    <div>{item.grades}</div>
                  </td>
                  <td>
                    <div>{item.distance}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div style={{ marginLeft: '3rem' }}>
          <a onClick={this.handleClick} href="">
            {this.state.isFullListShown ? (
              <p>Show Less &uarr;</p>
            ) : (
              <p>Show More &darr;</p>
            )}
          </a>
        </div>

        <p>
          * School data provided by National Center for Education Statistics,
          Pitney Bowes, and GreatSchools. Intended for reference only.
          GreatSchools Ratings compare a school’s test performance to statewide
          results. To verify enrollment eligibility, contact the school or
          district directly.
        </p>
      </div>
    );
  }
}
