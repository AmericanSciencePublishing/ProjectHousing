import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  FormGroup,
  FormControl,
  InputGroup,
  Button,
  DropdownButton,
  MenuItem,
  Col
} from 'react-bootstrap';

import './SearchConditions.css';

const SearchConditions = () => {
  return (
    <div id="background">
      <Navbar className="container" id="search-conditions">
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <InputGroup id="search-bar">
                <FormControl
                  type="text"
                  placeholder="City, Zip, Address, Key Words"
                />
                <InputGroup.Button>
                  <Button type="submit" bsStyle="warning">
                    Search
                  </Button>
                </InputGroup.Button>
              </InputGroup>
            </NavItem>

            <NavItem>
              <DropdownButton title="City">
                <MenuItem>Chicago</MenuItem>
                <MenuItem>New York</MenuItem>
                <MenuItem>San Francisco</MenuItem>
              </DropdownButton>
            </NavItem>
            <NavItem>
              <DropdownButton title="Area" />
            </NavItem>
            <NavItem>
              <DropdownButton title="Type" />
            </NavItem>
            <NavItem>
              <DropdownButton title="Price" />
            </NavItem>
            <NavItem>
              <DropdownButton title="Beds" />
            </NavItem>
            <NavItem>
              <DropdownButton title="Baths" />
            </NavItem>
            <NavItem>
              <DropdownButton title="House Size" />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SearchConditions;
