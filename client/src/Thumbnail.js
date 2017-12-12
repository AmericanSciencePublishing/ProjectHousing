import React from 'react';
import './Thumbnail.css';

import { connect } from 'react-redux';
import { save_house } from './actions';

const Thumbnail = ({ house, savedHouses, save_house_with_id }) => {
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
  } = house;

  const buttonClass = `like-button ${savedHouses.has(_id) ? 'confirmed' : ''}`;

  return (
    <div className="thumbnail">
      <div className="image-container">
        <img src={image} alt="house item" />
        <div className="overlay">$ {price.toLocaleString()}</div>
        <button
          className={buttonClass}
          onClick={e => {
            save_house_with_id(_id);
          }}
        />
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
};

const mapStateToProps = state => ({
  savedHouses: state.savedHouses
});

const mapDispatchToProps = dispatch => {
  const save = id => dispatch(save_house(id));
  return {
    save_house_with_id: save
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);
