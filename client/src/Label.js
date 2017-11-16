import React from 'react';
import { Label as Lab, Button } from 'react-bootstrap';

import './Label.css';

const Label = ({ text, withHandle }) => {
  if (withHandle) {
    return (
      <div>
        <Lab bsStyle="default" id="custom-label">
          {text}
          <Button bsStyle="link" bsClass="custom-button">
            X
          </Button>
        </Lab>
      </div>
    );
  } else {
    return (
      <div>
        <Lab bsStyle="default" id="custom-label">
          {text}
        </Lab>
      </div>
    );
  }
};

export default Label;
