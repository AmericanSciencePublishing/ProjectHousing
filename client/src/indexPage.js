import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  InputGroup,
  Col,
  Button
} from 'react-bootstrap';

import './indexPage.css';

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Col xs={10} xsOffset={1} sm={6} smOffset={3}>
          <form>
            <FormGroup id="searchArea">
              <h1>Brand</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Try &quot;Chicago&quot;"
                  bsSize="lg"
                />
                <InputGroup.Button>
                  <Button bsSize="lg" bsStyle="success">Search</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </form>
        </Col>
      </div>
    );
  }
}
