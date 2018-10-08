import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Label from './Label';

import './css/HouseListItem.css';

import { connect } from 'react-redux';
import { save_house, remove_house } from './actions';

class HouseListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { saved: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { _id } = this.props.house;

    const saved = this.props.savedHouses.has(_id);
    this.setState({ saved });
  }

  handleClick(_id) {
    if (!this.props.username) {
      // username exis in redux store if user is logged in
      alert('Please log in first !');
      return;
    }

    if (this.state.saved) {
      this.props.remove_house(_id);
      this.setState({saved: false})
    } else {
      this.props.save_house(_id);
      this.setState({saved: true})
    }
  }

  render() {
    const {
      _id,
      price,
      beds,
      baths,
      size,
      address,
      state,
      zipcode,
      imageDirectory
    } = this.props.house;

    const path = `/details/${_id}`;

    const buttonClass = this.state.saved ? 'like confirmed' : 'like';

    return (
      <div className="house-item">
        <div>
          <Link to={path} target="_blank">
            <img src={`${imageDirectory}/1.jpg`} alt="house" />
          </Link>
        </div>

        <div className="info">
          <span className="price">{price.toLocaleString()}</span>

          <div className="type">{`${beds} beds | ${baths} baths | ${size} sqft`}</div>

          <div className="address">{`${address} `}</div>
        </div>

        <div>
          <button
            className={buttonClass}
            onClick={() => this.handleClick(_id)}
            />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
  savedHouses: state.savedHouses
});

const mapDispatchToProps = dispatch => {
  const save = id => dispatch(save_house(id));
  const remove = id => dispatch(remove_house(id));
  return {
    save_house: save,
    remove_house: remove
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseListItem);
