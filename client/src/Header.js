import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './Header.css';

class Header extends Component{

  render(){
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Brand</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="nav">
              <NavItem href="#"><p>New Listing</p></NavItem>
              <NavItem href="#"><p>Commercial</p></NavItem>
              <NavItem href="#"><p>New Construction</p></NavItem>
              <NavItem href="#"><p>More Info</p></NavItem>
              <NavItem href="#"><p>FAQ</p></NavItem>
              <NavItem href="#"><p>En/Ch</p></NavItem>
              <NavItem href="#"><p>Log In</p></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    )
  }
}

export default Header;
