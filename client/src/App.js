import React, { Component } from 'react';
import { Navbar, Nav, NavItem,  } from 'react-bootstrap';
//import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Router, Route, NavLink } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import history from './history';
import Commercial from './Commercial';
import Faq from './Faq';
import Footer from './Footer';
import Info from './Info';
import LoginRegisForm from './LoginRegisForm';
import IndexPage from './indexPage';
import NewListing from './NewListing';
import NewConstructionList from './NewConstructionList';
import MyProfile from './MyProfile';
import Details from './Details';
import AccountButton from './AccountButtonHomePage';
import logo from './images/logo.png';
import './App.css';
var axios = require("axios");

class App extends Component {
    constructor() {
	super();
	this.state = { showModal: false,
		       user:{},
		       action:''
		     };
	this.handleClick = this.handleClick.bind(this);
	this.close = this.close.bind(this);
	this.sendUserToHome = this.sendUserToHome.bind(this);
	this.isEmpty = this.isEmpty.bind(this);
    }

    componentWillMount(){
	console.log('heiheihei');
	console.log(this.state.user);
	
	//another higher level check is to write a function of isAuth()
	//when user click 'My Profile', use onEnter{isAuth()} to check if is authed
	//only login and logout could call isAuth()
	
	//Right now, only sign out could set userState to 'offline', so user could
	//aotumatically login if he never sign out.
	
	axios.get('/checkUser/').then (res=>{
	    console.log(res);
	    if(res.data === ""){
		console.log('no such session logged in');
	    }
	    else{
		this.setState({
		    user: res.data
		});
	    }
	});
	console.log(this.state.user);
    }
    

    sendUserToHome(newuser){
	this.close();//close modal component
	this.setState({
	    user: newuser
	});
	console.log(this.state);
    }

    isEmpty(obj){
	return Object.keys(obj).length === 0 && obj.constructor === Object;
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
		<Router history={history}>
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
                
            {this.isEmpty(this.state.user) ? <NavItem><p onClick={this.handleClick}>Log in</p></NavItem> : <AccountButton sendUserToHome={this.sendUserToHome} user={this.state.user}/>}
            
                </Nav>
              </Navbar.Collapse>
            </Navbar>
		<Route exact path="/" component={IndexPage} />
		<Route path="/new-listing" component={NewListing} />
		<Route path="/faq" component={Faq} />
		<Route path="/commercial" component={Commercial} />
		<Route path="/new-construction" component={NewConstructionList} />
		<Route path="/info" component={Info} />
		<Route path="/details/:id" component={Details} />
		<Route path="/profile/:username" component={MyProfile} />
		</div>
        </Router>

		<LoginRegisForm sendUserToHome={this.sendUserToHome} show={this.state.showModal} onHide={this.close} />

		<Footer />
		</div>
    );
  }
}

export default App;
