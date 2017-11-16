import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Commercial from './Commercial';
import Faq from './Faq';
import Footer from './Footer';
import Info from './Info';
import LoginRegisForm from './LoginRegisForm';
import IndexPage from './indexPage';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { showModal: false };
    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }
  handleClick() {
    this.setState({ showModal: true });
  }
  render() {
    return (
      <div id="site">
        <Router>
          <div id="site-content">
            <Navbar fluid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">Brand</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav className="nav">
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
                  </Nav>
                  <Nav pullRight>
                  <NavItem>
                    <NavLink to="/">
                      <p>En/Ch</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <p onClick={this.handleClick}>Log in</p>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route exact path="/" component={IndexPage} />
            <Route path="/faq" component={Faq} />
            <Route path="/commercial" component={Commercial} />
            <Route path="/info" component={Info} />
          </div>
        </Router>

        <LoginRegisForm show={this.state.showModal} onHide={this.close} />

        <Footer />
      </div>
    );
  }
}

export default App;
