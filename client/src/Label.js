import React from 'react';

import './Label.css';

const Label = ({ title, withHandle, style = 'default' }) => {
  return (
    <span className={'custom-label ' + style}>
      <span>{title}</span>
      <button className="custom-button">X</button>
    </span>
  );
};

export default Label;
