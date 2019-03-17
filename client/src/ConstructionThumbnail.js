import React from 'react';
import {} from 'react-bootstrap';

import './css/ConstructionThumbnail.css';

const ConstructionThumbnail = (props) => {
  let { image, title, description } = props.construction;
  image = `url(${image})`;

  return (
    <div className="construction-thumbnail" style={{ backgroundImage: image }}>
      <div className="caption">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ConstructionThumbnail;
