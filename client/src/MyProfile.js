import React from 'react';
import './MyProfile.css';
//import history from './history';
import ProfileSetting from './ProfileSetting';
import MyProfileDetail from './MyProfileDetail';
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
		<LinkContainer exact to={`/user/${this.state.user.userName}`}>
		  <NavItem > My Profile </NavItem>
		</LinkContainer>
		<LinkContainer exact to={`/user/${this.state.user.userName}/save`}>
                  <NavItem > Saved Homes </NavItem>
                </LinkContainer>
		<LinkContainer exact to={`/user/${this.state.user.userName}/setting`}>
                  <NavItem > Settings </NavItem>
                </LinkContainer>

		
	      </Nav>
	      <Switch>
                <Route exact path="/user/:username" component={MyProfileDetail} />
                <Route exact path="/user/:username/save" component={ProfileSetting}/>
                <Route exact path="/user/:username/setting" component={ProfileSetting}/>
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


export default MyProfile;
