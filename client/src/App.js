import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Footer from './Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>Brand</Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight className="nav">
                <NavItem>
                  <NavLink to="/">
                    <p>New Listing</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">
                    <p>Commercial</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">
                    <p>New Construction</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">
                    <p>More Info</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">
                    <p>FAQ</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">
                    <p>En/Ch</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">
                    <p>Log In</p>
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

            {
              // <Route path="/commercial" component={} />
            }
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
