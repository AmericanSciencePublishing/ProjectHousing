import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Commercial from './Commercial';
import Faq from './Faq';
import Footer from './Footer';
import Info from './Info';
import './App.css';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">Brand</a>
                </Navbar.Brand>
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
                    <NavLink to="/commercial">
                      <p>Commercial</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/">
                      <p>New Construction</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/info">
                      <p>More Info</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/faq">
                      <p>FAQ</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/">
                      <p>En/Ch</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
	           <Login/>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/faq" component={Faq} />
            <Route path="/commercial" component={Commercial} />
	    <Route path="/info" component={Info} />
          </div>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
