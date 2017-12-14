import React, { Component } from 'react';

import { connect } from 'react-redux';
import { save_house, remove_house } from './actions';

import './Thumbnail.css';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: null,
      buttonClass: 'like-button'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!this.props.username) {
      alert('Please log in!');
      return;
    }

    const _id = this.state.house._id;
    let saved = this.props.savedHouses.has(_id);
    if (saved) {
      this.props.remove_house(_id);
      this.setState({ buttonClass: 'like-button' });
    } else {
      this.props.save_house(_id);
      this.setState({ buttonClass: 'like-button confirmed' });
    }
  }

  componentDidMount() {
    this.setState({ house: this.props.house }, () => {
      const _id = this.state.house._id;
      const saved = this.props.savedHouses.has(_id);
      if (saved) {
        this.setState({ buttonClass: 'like-button confirmed' });
      }
    });
  }

  render() {
    if (!this.state.house) {
      return <div />;
    }

    const {
      _id,
      image,
      price,
      address,
      city,
      state,
      beds,
      baths,
      size,
      year
    } = this.state.house;

    const buttonClass = this.state.buttonClass;

    return (
      <div className="thumbnail">
        <div className="image-container">
          <a href={`/details/${_id}`} target="_blank">
            <img src={image} alt="house item" />
          </a>
          <div className="overlay">$ {price.toLocaleString()}</div>
          <button className={buttonClass} onClick={this.handleClick} />
        </div>

        <div className="caption-area">
          <p className="title">{`${beds} bds | ${baths} ba | ${size} sq ft`}</p>
          <p className="subtitle">{`${address}, ${city}, ${state}`}</p>

          <hr />

          <p>
            {city}
            <span style={{ float: 'right' }}>{year}</span>
          </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);
