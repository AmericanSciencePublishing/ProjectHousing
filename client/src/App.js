import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

import Commercial from './Commercial';
import Faq from './Faq';
import Footer from './Footer';
import Info from './Info';
import LoginRegisForm from './LoginRegisForm';
import IndexPage from './indexPage';
import NewListing from './NewListing';
import NewConstructionList from './NewConstructionList';
import Details from './Details';

import logo from './images/logo.png';

import './App.css';

class App extends Component {
    constructor() {
	super();
	this.state = { showModal: false };
	this.handleClick = this.handleClick.bind(this);
	this.close = this.close.bind(this);
	this.test = this.test.bind(this);
    }

    test(){
	console.log("test");
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
                  <NavLink to="/">
                    <img src={logo} alt="brand" id="brand-image" />
                  </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem>
                    <LinkContainer to="/new-listing">
                      <p>New Listing</p>
                    </LinkContainer>
                  </NavItem>
                  <NavItem>
                    <LinkContainer to="/commercial">
                      <p>Commercial</p>
                    </LinkContainer>
                  </NavItem>
                  <NavItem>
                    <LinkContainer to="/new-construction">
                      <p>New Construction</p>
                    </LinkContainer>
                  </NavItem>
                  <NavItem>
                    <LinkContainer to="/info">
                      <p>More Info</p>
                    </LinkContainer>
                  </NavItem>
                  <NavItem>
                    <LinkContainer to="/faq">
                      <p>FAQ</p>
                    </LinkContainer>
                  </NavItem>
                  <NavItem disabled>
                    <LinkContainer to="/">
                      <p>En/Ch</p>
                    </LinkContainer>
                  </NavItem>
                  <NavItem>
                    <p onClick={this.handleClick}>Log in</p>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route exact path="/" component={IndexPage} />
            <Route path="/new-listing" component={NewListing} />
            <Route path="/faq" component={Faq} />
            <Route path="/commercial" component={Commercial} />
            <Route path="/new-construction" component={NewConstructionList} />
            <Route path="/info" component={Info} />
            <Route path="/details" component={Details} />
          </div>
        </Router>

		<LoginRegisForm test={this.test} show={this.state.showModal} onHide={this.close} />

        <Footer />
      </div>
    );
  }
}

export default App;
