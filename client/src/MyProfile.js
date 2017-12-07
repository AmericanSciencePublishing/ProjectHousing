import React from 'react';
import './MyProfile.css';
import history from './history';
//import history from './history';
import ProfileSetting from './ProfileSetting';
import { Nav, NavItem  } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
var axios = require("axios");

class MyProfile extends React.Component{

    constructor(props){
	super(props);
	this.state = { user:{}
		     };
    }

    componentWillMount(){
//	console.log('MyProfile test:',this.props.match.params.username);
	console.log('MyProfile props',this.props);

	axios.get('/checkUser/').then (res=>{
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
	    <div  className="container">
	      <Nav bsStyle="tabs" >
		<LinkContainer to={`/user/${this.state.user.userName}`}>
		  <NavItem >My Profile  </NavItem>
		</LinkContainer>
		<LinkContainer to="/user/:username/save">
                  <NavItem >My Saves  </NavItem>
                </LinkContainer>
		<LinkContainer to="/user/:username/setting">
                  <NavItem >Settings  </NavItem>
                </LinkContainer>

		
	      </Nav>
	      <Switch>
                <Route exact path="/user/:username" component={MyProfileDetail} />
                <Route path="/user/:username/save" component={ProfileSetting}/>
                <Route path="/user/:username/setting" component={ProfileSetting}/>
                <Route component={NoMatch}/>
                </Switch>
	    </div>

	);
    }
}

const NoMatch = ({ location }) => (
        <div>
        <h3>No match for <code>{location.pathname}</code></h3>
        </div>
);

const MyProfileDetail = () => (
    <div>
      <h2>my profile hahahahahahahha </h2>
    </div>
)

export default MyProfile;
