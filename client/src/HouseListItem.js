import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Label from './Label';

import './HouseListItem.css';

import { connect } from 'react-redux';
import { save_house, remove_house } from './actions';

class CommercialListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { house: null, buttonClass: 'like-button' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!this.props.username) {
      alert('Please log in first !');
      return;
    }

    const _id = this.state.house._id;
    const saved = this.props.savedHouses.has(_id);

    if (saved) {
      this.props.remove_house(_id);
      this.setState({ buttonClass: 'like-button' });
    } else {
      this.props.save_house(_id);
      this.setState({ buttonClass: 'like-button confirmed' });
    }
  }

  componentDidMount() {
    this.setState({ house: this.props.item });
  }

  render() {
    if (!this.state.house) {
      return <div />;
    }

    const {
      _id,
      price_per_sqft,
      beds,
      baths,
      cars,
      sqft,
      address,
      state,
      zipcode,
      imageDirectory
    } = this.state.house;

    const path = `/details/${_id}`;

    const buttonState = `like ${this.props.savedHouses.has(_id)
      ? 'confirmed'
      : null}`;

    return (
      <div className="house-item">
        <div>
          <Link to={path} target="_blank">
            <img src={`${imageDirectory}/1.jpg`} alt="house" />
          </Link>
        </div>

        <div className="info">
          <span className="price">$ {price_per_sqft}</span>

          <div className="type">{`${beds} beds | ${baths} baths | ${sqft} sqft | ${cars} cars`}</div>

          <div className="address">{`${address} `}</div>
        </div>

        <div>
          <button className={buttonState} onClick={this.handleClick} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CommercialListItem);
