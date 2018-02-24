import React from 'react';
import './MyProfile.css';
//import history from './history';
import MyProfileDetail from './MyProfileDetail';
import { Nav, NavItem  } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import Footer from './Footer';
import * as UserAPI from './utils/UserAPI';

class MyProfile extends React.Component{

    constructor(props){
	super(props);
	this.state = { user:{}
		     };
    }

    componentWillMount(){
//	console.log('MyProfile test:',this.props.match.params.username);
	console.log('MyProfile props',this.props);
	UserAPI.checkUser().then( res => {
            if(res.data === ""){
                console.log('no such session logged in');
            }
            else{
                this.setState({
                    user: res.data
                });
		console.log('profile user check:',this.state.user);
            }
        });
	
    }
    

    render(){
	return(
	    <div>
		<div className="profileTabs container">
		  <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 resContainer">    
		    <Nav bsStyle="tabs" >
		      <LinkContainer exact to={`/user/${this.state.user.username}`}>
			<NavItem > My Profile</NavItem>
		      </LinkContainer>
		      <LinkContainer exact to={`/user/${this.state.user.username}/save`}>
			<NavItem > Saved </NavItem>
                      </LinkContainer>
		      <LinkContainer exact to={`/user/${this.state.user.username}/setting`}>
			<NavItem > Settings</NavItem>
                      </LinkContainer>
		
		    </Nav>
		    </div>
	      <Switch>
                <Route exact path="/user/:username" component={MyProfileDetail} />
                <Route exact path="/user/:username/save" component={NoMatch}/>
                <Route exact path="/user/:username/setting" component={NoMatch}/>
                <Route component={NoMatch}/>
                    </Switch>
		</div>
		<Footer />
		</div>

	);
    }
}

const NoMatch = ({ location }) => (
        <div>
        <h3>No match for <code>{location.pathname}</code></h3>
        </div>
);


export default MyProfile;
