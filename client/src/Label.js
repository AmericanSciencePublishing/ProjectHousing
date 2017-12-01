import React from 'react';

import './Label.css';

const Label = ({ title, withHandle, color = 'default' }) => {
  return (
    <span className={'custom-label ' + color}>
      <span>{title}</span>
      {withHandle ? <button className="custom-button">X</button> : null}
    </span>
  );
};

export default Label;
