import React, { Component } from 'react';

import { connect } from 'react-redux';
import { save_house, remove_house } from './actions';

import './css/Thumbnail.css';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false

    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // check if user liked this house
    const { _id } = this.props.house;
    const { saved_houses } = this.props;

    this.setState({ saved: saved_houses.has(_id) });
  }

  handleClick(e) {
    if (!this.props.username) {
      alert('Please log in!');
      return;
    }

    const { _id } = this.props.house;
    const saved = this.state.saved;

    if (saved) {
      this.props.remove_house(_id);
      this.setState({ saved: false });
    } else {
      this.props.save_house(_id);
      this.setState({ saved: true });
    }
  }

  render() {
    if (!this.props.house) {
      return <div />;
    }
    const thumbnailWidth = {
      width:this.props.width + '%'
    };

    const {
      _id,
      address,
      city,
      beds,
      baths,
      imageDirectory,
      size,
      price,
      year_built
    } = this.props.house;

    const buttonClass = this.state.saved
      ? 'like-button confirmed'
      : 'like-button';

    return (
        <div className="thumbnail" style={thumbnailWidth}>
        <div className="image-container">
          <a href={`/details/${_id}`} target="_blank">
            <img src={`${imageDirectory}/1.jpg`} alt="" />
          </a>
          <div className="overlay">{price}</div>
          <button className={buttonClass} onClick={this.handleClick} />
        </div>

        <div className="caption-area">
          <p className="title">{`${beds} bds | ${baths} ba | ${size} sqft`}</p>
          <p className="subtitle">{`${address}`}</p>
          <hr />
          <p className="ending">{city}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
  saved_houses: state.savedHouses
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
