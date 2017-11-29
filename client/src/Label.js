import React from 'react';
import { Label as Lab, Button } from 'react-bootstrap';

import './Label.css';

const Label = ({ title, withHandle, bsStyle = 'default' }) => {
  return (
    <div>
      <Lab bsStyle={bsStyle} id="custom-label">
        {title}
        {withHandle ? (
          <Button bsStyle="link" bsClass="custom-button">
            X
          </Button>
        ) : null}
      </Lab>
    </div>
  );
};

export default Label;
