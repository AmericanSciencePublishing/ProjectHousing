import React from 'react';

import './css/Label.css';

const Label = ({ attribute, title, withHandle, color = 'default', onClick }) => {
  return (
    <span className={'custom-label ' + color}>
      <span>{title}</span>
      {withHandle ? (
        <button className="custom-button" onClick={onClick}>
          X
        </button>
      ) : null}
    </span>
  );
};

export default Label;
