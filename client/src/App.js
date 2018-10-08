import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Router, Route, NavLink, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import history from './history';
import HouseList from './HouseList';
import NewListing from './NewListing';
// import Commercial from './Commercial';
import Faq from './Faq';
import Info from './Info';
import LoginRegisForm from './LoginRegisForm';
import IndexPage from './indexPage';
import NewConstructionList from './NewConstructionList';
import MyProfile from './MyProfile';
import Details from './Details';
import AccountButton from './AccountButtonHomePage';
import logo from './images/logo.png';
import Forgotpwd from './Forgotpwd';
import Resetpwd from './Resetpwd';
import MapContainer from './MapContainer';
import { connect } from 'react-redux';
//import Footer from './Footer';
import './css/App.css';
import * as UserAPI from './utils/UserAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      user: {}, //userInfo
      test: '',
      action: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
    this.sendUserToHome = this.sendUserToHome.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  componentWillMount() {
    console.log('hehehhe', this.props.username);
    //	console.log('app.js cWillMount');
    //right now, we are using a very 'stupid' way for authentication,
    //that is use browser session to check a user's status in backend.

    //If you want to use localstorage for advanced authentication sysytem:
    //Auth0-js is a library for advenced authentication system
    //check a sample: https://github.com/auth0-samples/auth0-react-samples/tree/master/01-Login
    //official tutorial: https://auth0.com/docs/libraries/auth0js/v8

    //Right now, only sign out could set userState to 'offline', so user could
    //aotumatically login if he never sign out.
    UserAPI.checkUser().then(res => {
      console.log('checking for automatically sign in:', res);
      if (res.data === '') {
        console.log('no such session logged in');
      } else {
        this.setState({
          user: res.data
        });
      }
    });
    //	console.log("app.js state", this.state);
  }

  sendUserToHome(newuser) {
    this.close(); //close modal component
    this.setState({
      user: newuser
    });
    //	console.log(this.state);
  }

  isEmpty(obj) {
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
                  <LinkContainer to="/new-listing">
                    <NavItem>
                      <p>New Listing</p>
                    </NavItem>
                  </LinkContainer>
                  <LinkContainer to="/house-list?type=Commercial">
                    <NavItem>
                      <p>Commercial</p>
                    </NavItem>
                  </LinkContainer>
                  <LinkContainer to="/new-construction">
                    <NavItem>
                      <p>New Construction</p>
                    </NavItem>
                  </LinkContainer>
                  <LinkContainer to="/info">
                    <NavItem>
                      <p>More Info</p>
                    </NavItem>
                  </LinkContainer>
                  <LinkContainer to="/faq">
                    <NavItem>
                      <p>FAQ</p>
                    </NavItem>
                  </LinkContainer>
                  <NavItem disabled>
                    <LinkContainer to="/">
                      <p>En/Ch</p>
                    </LinkContainer>
                  </NavItem>
                  {this.isEmpty(this.state.user) ? (
                    <NavItem>
                      <p onClick={this.handleClick}>Log in</p>
                    </NavItem>
                  ) : (
                    <AccountButton
                      sendUserToHome={this.sendUserToHome}
                      user={this.state.user}
                    />
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route path="/new-listing" component={NewListing} />
              <Route path="/faq" component={Faq} />
              <Route path="/new-construction" component={NewConstructionList} />
              <Route path="/house-list" component={HouseList} />
              <Route path="/info" component={Info} />
              <Route path="/details/:id" component={Details} />
              <Route path="/user/:username" component={MyProfile} />
              <Route path="/forgotpwd" component={Forgotpwd} />
              <Route path="/resetpwd/:linktoken" component={Resetpwd} />
              <Route exact path="/m" component={MapContainer} />
              <Route component={NoMatch} />
            </Switch>

            {/*to pass props in <Route>, check here:https://github.com/ReactTraining/react-router/issues/4627, I chose to use a checkuser() again in myprofile's componentWillMount */}
          </div>
        </Router>
        <LoginRegisForm
          sendUserToHome={this.sendUserToHome}
          show={this.state.showModal}
          onHide={this.close}
        />

      </div>
    );
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const mapStateToProps = state => {
  return { username: state.username };
};

export default connect(mapStateToProps)(App);
